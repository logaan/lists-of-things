(ns lists-of-things.load
  (:use [datomic.api :only [db q] :as d]
        midje.sweet))

(def uri "datomic:mem://lists_of_things")

(defn create []
  (d/create-database uri))

(defn connect []
  (d/connect "datomic:mem://lists_of_things"))

(defn load-schema [conn]
  (.get (d/transact conn [
     {:db/id #db/id[:db.part/db]
      :db/ident :thing/name
      :db/valueType :db.type/string
      :db/cardinality :db.cardinality/one
      :db/fulltext true
      :db/doc "A thing's name"
      :db.install/_attribute :db.part/db}

     {:db/id #db/id[:db.part/db]
      :db/ident :thing/children
      :db/valueType :db.type/ref
      :db/cardinality :db.cardinality/many
      :db/doc "A thing's child things"
      :db.install/_attribute :db.part/db}
    ])))

(defn load-test-data [conn]
  (let [bambi      {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Bambi"}
        pokahontas {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Pokahontas"}
        cinderella {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Cinderella"}
        disney     {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Disney"
                    :thing/children (map :db/id [bambi pokahontas cinderella])}
        movies     {:db/id          (d/tempid :db.part/user)
                    :thing/name     "Movies"
                    :thing/children (map :db/id [disney])}]

    @(d/transact conn [bambi pokahontas cinderella disney movies])))

(defn retract [entity conn]
  @(d/transact conn `[[:db.fn/retractEntity ~entity]]))


"Setup"

(create)
(def conn (connect))
(load-schema conn)
(load-test-data conn)

"Queries"

(fact
  (q '[:find ?n
       :in $ ?query
       :where [(fulltext $ :thing/name ?query)
               [[?e ?n]]]]
     (db conn)
     "Bambi")
  => #{["Bambi"]})

(fact
  (q '[:find ?name
       :where [?e :thing/name "Disney"]
              [?e :thing/children ?c]
              [?c :thing/name ?name]]
     (db conn))
  => #{["Cinderella"] ["Bambi"] ["Pokahontas"]})

(fact
  (q '[:find ?name
       :where [?e :thing/name "Pokahontas"]
              [?p :thing/children ?e]
              [?p :thing/name ?name]]
     (db conn))
  => #{["Disney"]})

(def ancestor
  '[[[ancestor ?descendant ?ancestor]
     [?ancestor :thing/children ?descendant]]
    [[ancestor ?descendant ?ancestor]
     [?parent :thing/children ?descendant]
     [ancestor ?parent ?ancestor]]])

(fact
  (q '[:find ?n
       :in $ %
       :where [?e :thing/name "Pokahontas"]
              [ancestor ?e ?a]
              [?a :thing/name ?n]]
     (db conn)
     ancestor)
  => #{["Disney"] ["Movies"]})

(def descendant
  '[[[descendant ?ancestor ?descendant]
     [?ancestor :thing/children ?descendant]]
    [[descendant ?ancestor ?descendant]
     [?ancestor :thing/children ?child]
     [descendant ?child ?descendant]]])

(fact
  (q '[:find ?n
       :in $ %
       :where [?e :thing/name "Movies"]
              (descendant ?e ?d)
              [?d :thing/name ?n]]
     (db conn)
     descendant)
  => #{["Cinderella"] ["Disney"] ["Bambi"] ["Pokahontas"]})

"Creation"

(let [logan-id (d/tempid :db.part/user)]
  @(d/transact conn [
    [:db/add logan-id :thing/name "Logan"]
    {:db/id (d/tempid :db.part/user) :thing/name "Pei Shi" :thing/children [logan-id]}]))

(q '[:find ?name ?child-name
     :where [?e :thing/name ?name]
            [?e :thing/children ?child]
            [?child :thing/name ?child-name]]
   (db conn))

"Orphans"

(defn orphan? [db entity-id]
  (nil? (get (d/entity db entity-id) :thing/_children)))

(q '[:find ?name
     :where
     [?e :thing/name ?name]
     [(lists-of-things.load/orphan? $ ?e)]]
   (db conn))

"Teardown"

(def all-things
  (map first (q '[:find ?e :where [?e :thing/name]] (db conn))))

(map #(retract % conn) all-things)


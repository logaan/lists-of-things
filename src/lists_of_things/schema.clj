[
 ;; thing
 {:db/id #db/id[:db.part/db] ; no idea what this means
  :db/ident :thing/name
  :db/valueType :db.type/string ; check max length
  :db/cardinality :db.cardinality/one
  :db/fulltext true
  :db/doc "A thing's name"
  :db.install/_attribute :db.part/db} ; no idea what this means either

 {:db/id #db/id[:db.part/db] ; no idea what this means
  :db/ident :thing/body
  :db/valueType :db.type/string ; check max length (is there something longer)
  :db/cardinality :db.cardinality/one
  :db/fulltext true
  :db/doc "A thing's body"
  :db.install/_attribute :db.part/db} ; no idea what this means either

 {:db/id #db/id[:db.part/db] ; no idea what this means
  :db/ident :thing/children
  :db/valueType :db.type/ref
  :db/cardinality :db.cardinality/many
  :db/doc "A thing's child things"
  :db.install/_attribute :db.part/db} ; no idea what this means either
]


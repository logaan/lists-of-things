; Fulltext search

;; find all communities whose names include the string "Wallingford"
(pprint (seq (q '[:find ?n
                      :where
                      [(fulltext $ :community/name "Wallingford") [[?e ?n]]]]
                    (db conn))))

; Should be useful for expressing relationships, even ones that are many
; time through. Guess it's also how I'll be doing recursive queries.

;; find names of all communities in NE and SW regions, using rules
;; to avoid repeating logic
(let [rules '[[[region ?c ?r]
               [?c :community/neighborhood ?n]
               [?n :neighborhood/district ?d]
               [?d :district/region ?re]
               [?re :db/ident ?r]]]]
  (pprint (seq (q '[:find ?n
                    :in $ %
                    :where
                    [?c :community/name ?n]
                    [region ?c :region/ne]]
                  (db conn)
                  rules)))
  (pprint (seq (q '[:find ?n
                    :in $ %
                    :where
                    [?c :community/name ?n]
                    [region ?c :region/sw]]
                  (db conn)
                  rules))))



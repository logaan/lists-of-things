# lists-of-things

Datomic is now using the free edition. It's on clojars so just lein deps.


To start the transactor run:

  ./bin/transactor config/samples/free-transactor-template.properties

Or checkout a copy from
http://downloads.datomic.com/0.8.3438/datomic-free-0.8.3438.zip into the same
directory as lists-of-things is checked out into.

## Usage

Run `make server` and `make datomic`, a browser window should appear. Then add
things to your delight.

## Roadmap

Replaces reminders
- Things
  x Create
  x List orphans
  x Delete thing
  - Edit thing

Replaces emailing myself
- Things
  x Show
- Text Content
  x Create
  x List
  - Delete
  - Edit

Replaces mind maps
- Children
  x List
  x Create
  - Move
  x Add to new parent
  - Remove from parent

Replaces the hit list
- Simulates tagging
- Simulates contexts
- Sorting

Replaces jira
- Give permission to other users
- Open multiple listings
- 'Sort' things between listings
x Simulates comments
x Search

Explainations
- Introduce
  - Things
  - Content
  - Links
  - Users
- Replaces
  - Workflows
  - Tags
  - Contexts
  - Comments
  - Attatchments
  - Authorization?

## BUGS

- When the first static page load occurs you see it with no content for a
  moment before we ajax in the real content. This flicker should be avoided.

## TODO

- Remove html based interface
  - Search
  - Display parents of open node above listing
  - Add parent in priview
  - Remove parents in preview
  - Save new content to db
  - Edit name of thing
- Refactor JS
  - Wrapping recursively
  - Opening current thing
    - History
    - List
    - Preview
    - Breadcrumbs
- Restore normal browser behavior
  x Add history
  - Have the api return urls in addition to ids
  - Add links with meaningful hrefs to everything with an onclick
  x Have bs-index served dynamically inline with history and urls
  - Use \# to represent which child should be selected
- Performance tuning
  - Add expires headers
  - Double check gzipping
- Power usage
  - navigation
    - j and k shortcuts for movement up and down list
    - h for back
    - l and o for open current thing
    - p for preview (consider automatic on selection)
    - / for search
    - leave arrow keys and space bar free for scrolling as normal
  - editing
    - escape to unfocus any current form field
    - i to insert new child
    - c for content
    - e to change thing name
    - d to delete
    - u to undo
    - a to add parent
    - m to move from current parent to new
    - r to remove current parent
  - discoverability
    - ? and link to show help
    - underline appropriate character for edit/delete/add/move/remove
- Batch operations
  - Allow multiple selection
  - Update basic operations to act in batch
- Auth
  - User accounts with persona
  - Share with user (via email)

## Things to consider

- Switch to coffee script
- Switch to clojurescript
x Split js into seperate files

## License

Copyright (C) 2012 Logan Campbell-McPherson

Distributed under the Eclipse Public License, the same as Clojure.

# Lists of things

If you're anything like me you casually keep a bunch of lists. Some of them
quickly get thrown away like shopping lists. Others grow over months like a
your favorite movies, great places to eat or places to visit on your dream
holiday.

I keep some of these lists on paper, but then they're hard to share with
friends or have people contribute. When I'm out and about I often email myself
from my phone, but then all my ideas get dissorganised and forgotten. I even
have a couple of todo apps that I fill up with work stuff, but they all have
too many features and force me to follow their workflow.

So I created Lists of Things. You can use it to keep all your lists in one
place. It's a really flexible system that you can use to store your recipes or
manage all your company's contacts and projects, or anything in between. You
can create lists of any type of thing, like books, purchases, yoga positions
or theme parks, and of course projects and tasks.

You can share lists friends and collegues and they can work on them with you. I
keep a list of things to do with my girlfriend that we both update when we get
new ideas. My team at work has lists for work that's coming up, currently being
worked on, waiting for approval, and totally complete. And we keep track of
who's working on what by adding tasks to multiple lists.

I hope you'll give it a try and let me know what you think.

## Usage

1. Checkout this source
2. Download datomic from
http://downloads.datomic.com/0.8.3438/datomic-free-0.8.3438.zip into the same
directory as lists-of-things is checked out into (not into the lists of things
directory).
3. Run `make server` and `make datomic`
4. A browser window should appear showing lists of things.

## Roadmap

Replaces reminders
- Things
  - ~~Create~~
  - ~~List orphans~~
  - ~~Delete thing~~
  - Edit thing

Replaces emailing myself
- Things
  - ~~Show~~
- Text Content
  - ~~Create~~
  - ~~List~~
  - Delete
  - Edit

Replaces mind maps
- Children
  - ~~List~~
  - ~~Create~~
  - Move
  - ~~Add to new parent~~
  - Remove from parent

Replaces the hit list
- Simulates tagging
- Simulates contexts
- Sorting

Replaces jira
- Give permission to other users
- Open multiple listings
- 'Sort' things between listings
- ~~Simulates comments~~
- ~~Search~~

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
  - ~~Add history~~
  - Have the api return urls in addition to ids
  - Add links with meaningful hrefs to everything with an onclick
  - ~~Have bs-index served dynamically inline with history and urls~~
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
- ~~Split js into seperate files~~

## License

Copyright (C) 2012 Logan Campbell-McPherson

Distributed under the Eclipse Public License, the same as Clojure.

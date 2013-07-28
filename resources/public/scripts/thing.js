function Thing(thing) {
  var object = {};

  object.id = ko.observable(thing.id);

  object.name = ko.observable(thing.name);

  object.selected = ko.observable(thing.selected);

  object.parents = ko.observableArray(
      thing.parents ? _.map(thing.parents, _.partial(Parent, object)) : []
  );

  object.children = ko.observableArray(
    thing.children ? _.map(thing.children, ChildOfListingThing) : []
  );

  // NOTE: Contents will need to be moved into their own model once they
  // support actions like editing and deleting.
  object.contents = ko.observableArray(thing.contents || []);

  object.parentsWithout = function(parentToExclude) {
    var smallerParents = this.parents().slice(0);
    var index = smallerParents.indexOf(parentToExclude);
    smallerParents.splice(index, 1);
    return smallerParents;
  };

  object.deletes = function() {
    var me = this;

    api.remove(this.id(), function(data, textSatus, jqXHR) {
      // REFACTOR: Will need to remove its self from the repository once the
      // listing is computed.
      page.listing().children.remove(me);
    });
  };

  object.open = function() {
    var thingPart = this.id() ? "/things/" + this.id() : "/things";
    Path.history.pushState({}, "", thingPart);
  };

  object.toggleSelection = function() {
    this.selected(!this.selected());
  };

  // NOTE: Add content shouldn't be using jquery for values. Instead each thing
  // should have a newContent field which is bound to the content area. Add
  // content will pull the information out of there and reset it. Like new
  // thing name.
  object.addContent = function(element) {
    var contentarea = $(element).find("#contentarea");
    var content = contentarea.val();
    contentarea.val("");
    contentarea.focus();
    this.contents.push({text: content});

    api.addContent(this.id(), content, function(result) {
      console.log(result);
    })
  };

  object.addParentPopover = ko.observable({
    visible: ko.observable(false),
    toggleVisibility: function() {
      this.visible(!this.visible());
    },
    query: ko.observable(""),
    results: ko.observableArray([]),
    select: function() {
      console.log(this);
    }
  });

  // Current thing is easily confused with this. This function should maybe
  // be being called on the currently selected thing instead of the parent
  // being added.
  //
  // If a thing is an orphan and is given a parent it should disapear from
  // the orphan listing.
  //
  // If the parent is a sybling it's child count should be updated.
  //
  // The thing that has been given a parent should have it's parents updated.
  object.addAsParent = function() {
    var currentThing = page.preview();
    currentThing.parents.push(this);
    currentThing.addParentPopover().visible(false);

    var childId = currentThing.id();
    var parentId = this.id();

    api.addParent(childId, parentId, function(result) {
      console.log(result);
    });

    return false;
  };

  // This doesn't pull back the id if the thing is newly saved.
  object.save = function() {
    api.createThing(this.name(), page.listing().id(), function(result) {
      console.log(result);
    });
  };

  ko.computed(function() {
    var addParentPopover = this;

    if(addParentPopover.query() != "") {
      api.search(addParentPopover.query() + "*", function(results) {
        var things = $(results).map(function(index, result) {
          return createThingFromResponse(result);
        }).toArray();

        addParentPopover.results(things);
      });
    }
  }, object.addParentPopover())

  return object;
};

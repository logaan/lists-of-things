function Thing(args) {
  var my = {};

  my.id = ko.observable(args.id);

  my.name = ko.observable(args.name);

  my.selected = ko.observable(args.selected);

  my.parents = ko.observableArray(
      args.parents ? _.map(args.parents, _.partial(Parent, my)) : []
  );

  my.children = ko.observableArray(
    args.children ? _.map(args.children, _.partial(ChildOfListingThing, my)) : []
  );

  my.newChild = NewChildOfListingThing(my);

  // NOTE: Contents will need to be moved into their own model once they
  // support actions like editing and deleting.
  my.contents = ko.observableArray(args.contents || []);

  my.parentsWithout = function(parentToExclude) {
    var smallerParents = this.parents().slice(0);
    var index = smallerParents.indexOf(parentToExclude);
    smallerParents.splice(index, 1);
    return smallerParents;
  };

  my.deletes = function() {
    var me = this;

    api.remove(this.id()).done(function(data, textSatus, jqXHR) {
      // NOTE: Will need to remove its self from the repository once the
      // listing is computed.
      page.listing().children.remove(me);
    });
  };

  my.open = function() {
    var thingPart = this.id() ? "/things/" + this.id() : "/things";
    Path.history.pushState({}, "", thingPart);
  };

  my.toggleSelection = function() {
    this.selected(!this.selected());
  };

  my.selectNone = function() {
    _.each(my.children(), function(child) {
      child.selected(false);
    });
  }

  // NOTE: Add content shouldn't be using jquery for values. Instead each thing
  // should have a newContent field which is bound to the content area. Add
  // content will pull the information out of there and reset it. Like new
  // thing name.
  my.addContent = function(element) {
    var contentarea = $(element).find("#contentarea");
    var content = contentarea.val();
    contentarea.val("");
    contentarea.focus();
    this.contents.push({text: content});

    api.addContent(this.id(), content).done(function(result) {
      console.log(result);
    })
  };

  my.addParentPopover = ko.observable({
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
  my.addAsParent = function() {
    var currentThing = page.preview();
    currentThing.parents.push(this);
    currentThing.addParentPopover().visible(false);

    var childId = currentThing.id();
    var parentId = this.id();

    api.addParent(childId, parentId).done(function(result) {
      console.log(result);
    });

    return false;
  };

  ko.computed(function() {
    var addParentPopover = this;

    if(addParentPopover.query() != "") {
      api.search(addParentPopover.query() + "*").done(function(results) {
        var things = $(results).map(function(index, result) {
          return createThingFromResponse(result);
        }).toArray();

        addParentPopover.results(things);
      });
    }
  }, my.addParentPopover())

  return my;
};

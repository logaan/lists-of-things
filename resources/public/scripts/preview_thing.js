function PreviewThing(raw) {
  var my = {};

  my.id = ko.observable(raw.id);

  my.name = ko.observable(raw.name);

  my.parents = ko.observableArray(
      raw.parents ? _.map(raw.parents, _.partial(Parent, my)) : []
  );

  my.children = ko.observableArray(
    raw.children ? _.map(raw.children, _.partial(ChildOfListingThing, my)) : []
  );

  // NOTE: Contents will need to be moved into their own model once they
  // support actions like editing and deleting.
  my.contents = ko.observableArray(raw.contents || []);

  my.deletes = function() {
    api.remove(my.id()).done(function(data, textSatus, jqXHR) {
      removeFromRepository(my.id());
    });
  };

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
}

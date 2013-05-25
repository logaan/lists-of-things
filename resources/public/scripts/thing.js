function Thing(thing) {
  var object = {
    id:       ko.observable(thing.id),

    name:     ko.observable(thing.name),

    parents:  ko.observableArray(thing.parents  || []),

    children: ko.observableArray(thing.children || []),

    contents: ko.observableArray(thing.contents || []),

    parentsWithout: function(parentToExclude) {
      var smallerParents = this.parents().slice(0);
      var index = smallerParents.indexOf(parentToExclude);
      smallerParents.splice(index-1, 1);
      return smallerParents;
    },

    deletes: function() {
      var me = this;

      api.remove(this.id(), function(data, textSatus, jqXHR) {
        page.listing().children.remove(me);
        page.preview(page.listing());
      });
    },

    open: function() {
      var thingPart = this.id() ? "/things/" + this.id() : "/things";
      Path.history.pushState({}, "", thingPart);
    },

    select: function(model, event) {
      // Perhaps this should be a css or style binding to a selected flag.
      // Makes some sense I guess. You could have multiple things selected.
      $("#children .selected").removeClass("selected");
      // This seems to be throwing errors when we do a select on create.
      $(event.currentTarget).addClass("selected");
      page.preview(model);
    },

    addContent: function(element) {
      var contentarea = $(element).find("#contentarea");
      var content = contentarea.val();
      contentarea.val("");
      contentarea.focus();
      this.contents.push({text: content});

      api.addContent(this.id(), content, function(result) {
        console.log(result);
      })

    },

    addParentPopover: ko.observable({
      visible: ko.observable(false),
      toggleVisibility: function() {
        this.visible(!this.visible());
      },
      query: ko.observable(""),
      results: ko.observableArray([]),
      select: function() {
        console.log(this);
      }
    }),

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
    addAsParent: function() {
      var currentThing = page.preview();
      currentThing.parents.push(this);
      currentThing.addParentPopover().visible(false);

      var childId = currentThing.id();
      var parentId = this.id();

      api.addParent(childId, parentId, function(result) {
        console.log(result);
      });

      return false;
    },

    // This doesn't pull back the id if the thing is newly saved.
    save: function() {
      api.createThing(this.name(), page.listing().id(), function(result) {
        console.log(result);
      });
    }
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

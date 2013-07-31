function ChildOfListingThing(listingParent, args) {
  // NOTE: var my = Thing(args);
  var my = {};

  my.id = ko.observable(args.id);

  my.name = ko.observable(args.name);

  my.selected = ko.observable(args.selected);

  my.parentIds = ko.observableArray(args.parentsIds);

  my.parents = ko.computed(function() {
    return _.chain(my.parentIds())
            .map(repository.get)
            .compact()
            .map(_.partial(ParentOfChildOfListingThing, my))
            .value();
  });

  my.childrenIds = ko.observableArray(args.childrensIds);

  my.children = ko.computed(function() {
    return _.chain(my.childrenIds())
            .map(repository.get)
            .compact()
            .map(_.partial(ChildOfListingThing, my))
            .value();
  });

  my.otherParents = ko.computed(function() {
    return _.reject(my.parents(), function(parent) {
      return parent.id == listingParent.id();
    });
  });

  my.toggleSelection = function() {
    repository.update(my.id(), function(raw) {
      raw.selected = !raw.selected;
      return raw;
    });
  };

  my.open = function() {
    var thingPart = my.id() ? "/things/" + my.id() : "/things";
    Path.history.pushState({}, "", thingPart);
  };

  return my;
}

function ChildOfListingThing(listingParent, args) {
  // NOTE: var my = Thing(args);
  var my = {};

  my.id = ko.observable(args.id);

  my.name = ko.observable(args.name);

  my.selected = ko.observable(args.selected);

  my.parentIds = ko.observableArray(_.pluck(args.parents, "id"));

  my.parents = ko.computed(function() {
    return _.chain(my.parentIds())
            .map(repository.get)
            .compact()
            .map(_.partial(ParentOfChildOfListingThing, my))
            .value();
  });

  my.children = ko.observableArray(
    args.children ? args.children : []
  );

  my.otherParents = ko.computed(function() {
    return _.reject(my.parents(), function(parent) {
      return parent.id == listingParent.id();
    });
  });

  my.toggleSelection = function() {
    my.selected(!my.selected());
  };

  my.open = function() {
    var thingPart = my.id() ? "/things/" + my.id() : "/things";
    Path.history.pushState({}, "", thingPart);
  };

  return my;
}

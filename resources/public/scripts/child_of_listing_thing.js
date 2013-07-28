function ChildOfListingThing(listingParent, args) {
  // NOTE: var my = Thing(args);
  var my = {};

  my.id = ko.observable(args.id);

  my.name = ko.observable(args.name);

  my.selected = ko.observable(args.selected);

  // NOTE: Should be a list of ids.
  my.parents = ko.observableArray(
    args.parents ? _.map(args.parents, _.partial(Parent, my)) : []
  );

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

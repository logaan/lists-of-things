function ChildOfListingThing(args) {
  // NOTE: var my = Thing(args);
  var my = {};

  my.id = ko.observable(args.id);

  my.name = ko.observable(args.name);

  my.selected = ko.observable(args.selected);

  my.parents = ko.observableArray(
      args.parents ? _.map(args.parents, _.partial(Parent, my)) : []
  );

  my.children = ko.observableArray(
    args.children ? _.map(args.children, Thing) : []
  );

  // NOTE: This can be done away with as you can do the same with underscore
  // using _.without(parents(), parentToExclude)
  my.parentsWithout = function(parentToExclude) {
    var smallerParents = my.parents().slice(0);
    var index = smallerParents.indexOf(parentToExclude);
    smallerParents.splice(index, 1);
    return smallerParents;
  };

  my.toggleSelection = function() {
    my.selected(!my.selected());
  };

  my.open = function() {
    var thingPart = my.id() ? "/things/" + my.id() : "/things";
    Path.history.pushState({}, "", thingPart);
  };

  return my;
}

function Thing(args) {
  var my = {};

  my.id = ko.observable(args.id);

  my.name = ko.observable(args.name);

  my.children = ko.observableArray(
    args.children ? _.map(args.children, _.partial(ChildOfListingThing, my)) : []
  );

  my.newChild = NewChildOfListingThing(my);

  my.selectNone = function() {
    _.each(my.children(), function(child) {
      child.selected(false);
    });
  }

  return my;
};

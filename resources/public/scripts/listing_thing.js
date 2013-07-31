function ListingThing(args) {
  var my = {};

  my.id = ko.observable(args.id);

  my.name = ko.observable(args.name);

  my.childrenIds = ko.observableArray(args.childrensIds);

  my.children = ko.computed(function() {
    return _.chain(my.childrenIds())
            .map(repository.get)
            .compact()
            .map(_.partial(ChildOfListingThing, my))
            .value();
  });

  my.newChild = NewChildOfListingThing(my);

  my.selectNone = function() {
    _.each(my.children(), function(child) {
      repository.update(child.id(), function(rawChild) {
        rawChild.selected = false;
        return rawChild;
      });
    });
  }

  return my;
};

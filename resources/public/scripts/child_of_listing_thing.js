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
  }).extend({ throttle: repository.throttle });

  my.childrenIds = ko.observableArray(_.pluck(args.children || [], "id"));

  my.childCount = ko.computed(function() {
    return _.chain(my.childrenIds())
            .map(repository.get)
            .compact()
            .value().length;
  }).extend({ throttle: repository.throttle });

  my.otherParents = ko.computed(function() {
    return _.reject(my.parents(), function(parent) {
      return parent.id == listingParent.id();
    });
  }).extend({ throttle: repository.throttle });

  my.toggleSelection = function() {
    listingParent.selectNone();
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

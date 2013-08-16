function PreviewThing(raw) {
  var my = {};

  my.id = ko.observable(raw.id);

  my.name = ko.observable(raw.name);

  my.parentIds = ko.observableArray(_.pluck(raw.parents || [], "id"));

  my.parents = ko.computed(function() {
    return _.chain(my.parentIds())
            .map(repository.get)
            .compact()
            .map(_.partial(Parent, my))
            .value();
  }).extend({ throttle: repository.throttle });

  // NOTE: Contents will need to be moved into their own model once they
  // support actions like editing and deleting.
  my.contents = ko.observableArray(raw.contents || []);

  my.newContent = my.id() === "orphans" ? null : ko.observable(NewContent(my));

  my.deletes = function() {
    repository.remove(my.id()).done(function() {
      if(page.listing().id() == my.id()) {
        window.history.back();
      };
    });
  };

  // NOTE: Does this actually need to be observable?
  my.addParentPopover = ko.observable(AddParentPopover());

  // NOTE: Can this be moved into AddParentPopover?
  ko.computed(function() {
    var addParentPopover = this;

    if(addParentPopover.query() != "") {
      // NOTE: Should be moved into repository
      api.search(addParentPopover.query() + "*").done(function(results) {
        var things = _.map(results, _.partial(AddParentPopoverThing, my.addParentPopover(), my));
        addParentPopover.results(things);
      });
    }
  }, my.addParentPopover())

  return my;
}

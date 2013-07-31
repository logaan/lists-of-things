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
  });

  // NOTE: Contents will need to be moved into their own model once they
  // support actions like editing and deleting.
  my.contents = ko.observableArray(raw.contents || []);

  my.deletes = function() {
    repository.remove(my.id());
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

    // NOTE: Should be moved into repository
    api.addContent(this.id(), content).done(function(result) {
      console.log(result);
    })
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

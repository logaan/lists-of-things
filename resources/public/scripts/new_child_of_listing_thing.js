function NewChildOfListingThing(listingThing) {
  var my = {}

  my.name = ko.observable("");

  my.addThing = function() {
    var parentId = listingThing.id();

    // NOTE: This should probably be creating the child with the parent already
    // in it.
    api.createThing(my.name(), parentId).done(function(response) {
      // NOTE: These three blocks could probably be a repository method.
      listingThing.selectNone();

      var newThing = {name: my.name(), id: response.id, selected: true};

      repository.add(newThing);

      var parent = repository.get(parentId)
      parent.children.push(newThing);
      repository.add(parent);

      my.name("");
    });
  };

  return my;
}

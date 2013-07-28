function NewChildOfListingThing(listingThing) {
  var my = {}

  my.name = ko.observable("");

  my.addThing = function() {
    var parentId = listingThing.id();

    // NOTE: This should probably be creating the child with the parent already
    // in it.
    api.createThing(my.name(), parentId).done(function(response) {
      // NOTE: These three blocks could probably be a repository method.
      var newThing = {name: my.name(), id: response.id}

      addToRepository(newThing);

      var parent = getFromRepository(parentId)
      parent.children.push(newThing);
      addToRepository(parent);

      my.name("");
    });
  };

  return my;
}

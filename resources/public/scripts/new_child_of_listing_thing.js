function NewChildOfListingThing(listingThing) {
  var my = {}

  my.name = ko.observable("");

  my.addThing = function() {
    var parentId = listingThing.id();

    api.createThing(my.name(), parentId).done(function(response) {
      var newThing = {name: my.name(), id: response.id}

      addToRepository(response.id, newThing);

      var parent = getFromRepository(parentId)
      parent.children.push(newThing);
      addToRepository(parentId, parent);

      my.name("");
    });
  };

  return my;
}

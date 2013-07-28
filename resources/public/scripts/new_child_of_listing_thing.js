function NewChildOfListingThing(listingThing) {
  var my = {}

  my.name = ko.observable("");

  my.addThing = function() {
    api.createThing(my.name(), listingThing.id()).done(function(response) {
      addToRepository(response.id, {
        name:     my.name(),
        id:       response.id
      });

      listingThing.selectNone();
      listingThing.childrenIds.push(response.id);

      my.name("");
    });
  };

  return my;
}

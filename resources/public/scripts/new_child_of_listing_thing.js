function NewChildOfListingThing(listingThing) {
  var my = {}

  my.name = ko.observable("");

  my.addThing = function() {
    api.createThing(my.name(), listingThing.id(), function(response) {
      var newThing = ChildOfListingThing(listingThing, {
        name:     my.name(),
        id:       response.id,
        selected: false
      });

      listingThing.selectNone();
      listingThing.children.push(newThing);

      my.name("");
    });
  };

  return my;
}

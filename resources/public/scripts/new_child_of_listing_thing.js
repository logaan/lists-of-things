function NewChildOfListingThing(listingThing) {
  var my = {}

  my.name = ko.observable("");

  my.addThing = function() {
    repository.createThing(my.name(), listingThing.id()).done(function() {
      listingThing.selectNone();
    });
  };

  return my;
}

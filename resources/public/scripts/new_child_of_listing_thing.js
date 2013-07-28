function NewChildOfListingThing(listingThing) {
  var my = {}

  my.name = ko.observable("");

  my.addThing = function() {
    // NOTE: Temporary ID. Should be pulled back from API.
    var newThing = ChildOfListingThing(listingThing, {
      name:     my.name(),
      selected: false
    });

    listingThing.selectNone();
    listingThing.children.push(newThing);
    my.save();

    my.name("");
  };

  my.save = function() {
    api.createThing(my.name(), listingThing.id(), function(result) {
      console.log(result);
    });
  };

  return my;
}

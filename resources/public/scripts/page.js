function Page(listingThing) {
  var my = {}

  my.listing = ko.observable(listingThing);

  my.preview =  ko.computed(function() {
    var firstSelected = _.find(my.listing().children(), function(child) {
      return child.selected();
    });

    return firstSelected || my.listing();
  });

  return my;
}

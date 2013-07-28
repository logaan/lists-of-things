function Page(listingId) {
  var my = {}

  my.listingId = ko.observable(listingId);

  my.listing = ko.computed(function() {
    return Thing(repository[my.listingId()]);
  });

  my.preview = ko.computed(function() {
    var firstSelected = _.find(my.listing().children(), function(child) {
      return child.selected();
    });

    return firstSelected || my.listing();
  });

  return my;
}

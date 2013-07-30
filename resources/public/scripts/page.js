function Page(listingId) {
  var my = {}

  my.listingId = ko.observable(listingId);

  my.listing = ko.computed(function() {
    return ListingThing(repository.get(my.listingId()));
  });

  my.preview = ko.computed(function() {
    var firstSelected = _.find(my.listing().children(), function(child) {
      return child.selected();
    });

    var previewThing = firstSelected || my.listing();
    return PreviewThing(repository.get(previewThing.id()));
  });

  return my;
}

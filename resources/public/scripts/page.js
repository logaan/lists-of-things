function Page(listingId) {
  var my = {}

  my.listingId = ko.observable(listingId);

  my.listing = ko.computed(function() {
    var rawThing = repository.get(my.listingId());
    return rawThing ? ListingThing(rawThing) : null;
  }).extend({ throttle: repository.throttle });

  my.preview = ko.computed(function() {
    if(my.listing()) {
      var firstSelected = _.find(my.listing().children(), function(child) {
        return child.selected();
      });

      var previewThing = firstSelected || my.listing();

      return PreviewThing(repository.get(previewThing.id()));
    } else {
      return null;
    }
  }).extend({ throttle: repository.throttle });

  return my;
}

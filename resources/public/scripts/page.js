function Page(args) {
  var page = {}

  page.listing = ko.observable(args.listing);

  page.preview =  ko.computed(function() {
    var firstSelected = _.find(page.listing().children(), function(child) {
      return child.selected();
    });

    return firstSelected || page.listing();
  });

  return page;
}

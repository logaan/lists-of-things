function Page(args) {
  var page = {}

  page.listing = ko.observable(args.listing);

  page.preview =  ko.computed(function() {
    var firstSelected = _.find(page.listing().children(), function(child) {
      return child.selected();
    });

    return firstSelected || page.listing();
  });

  page.newThingName = ko.observable(args.newThingName);

  // Setup the thing name field as bound to an UnsavedThing object. It will
  // have the 'create' function on it rather than that sitting in with things
  // from listings. Might be a good opportunity to introduce UUIDs.
  page.addThing = function(form) {
    var thing = Thing({
      name:     page.newThingName(),
      selected: true
    });

    page.listing().children.push(thing);
    thing.save();

    page.newThingName("");
  };

  return page;
}

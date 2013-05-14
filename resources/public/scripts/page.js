function Page(page) {
  return {
    listing: ko.observable(page.listing),

    preview: ko.observable(page.preview || page.listing),

    // Setup the thing name field as bound to an UnsavedThing object. It will
    // have the 'create' function on it rather than that sitting in with things
    // from listings. Might be a good opportunity to introduce UUIDs.
    addThing: function(form) {
      var thing = Thing({
        name: $("#new-thing-name", form).val()
      });

      this.listing().children.push(thing);
      thing.save();
      thing.select();

      $("#new-thing-name", form).val("");
      $("#new-thing-name", form).focus();
    }
  };
}

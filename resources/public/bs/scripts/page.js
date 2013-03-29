function Page(page) {
  return {
    listing: ko.observable(page.listing),

    preview: ko.observable(page.preview || page.listing),

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

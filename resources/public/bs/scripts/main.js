var baseUrl = "http://localhost:3000/api";

function Thing(thing) {
  return {
    id:       ko.observable(thing.id),
    name:     ko.observable(thing.name),
    parents:  ko.observableArray(thing.parents  || []),
    parentsWithout: function(parentToExclude) {
      var smallerParents = this.parents().slice(0);
      var index = smallerParents.indexOf(parentToExclude);
      smallerParents.splice(index, 1);
      return smallerParents;
    },
    children: ko.observableArray(thing.children || []),
    contents: ko.observableArray(thing.contents || []),
    rewind: function(model, event) {
      var thing;

      while(thing = page.history.pop()) {
        if(thing.id() == model.id()) {
          break;
        }
      };

      page.listing(this);
      page.preview(this);
    },
    deletes: function() {
      // Duplicated code
      var thingPart = "/things/" + this.id();
      var thingUrl = baseUrl + thingPart + "?callback=?";
      var me = this;

      jQuery.ajax(thingUrl, {
        type: "DELETE",
        dataType: "jsonp",
        success: function(data, textSatus, jqXHR) {
          page.listing().children.remove(me);
          page.preview(page.listing());
        }
      });
    },
    open: function(model, event) {
      var thingPart = "/things/" + model.id();
      var thingUrl = baseUrl + thingPart + "?callback=?";

      history.pushState(null, null, thingPart);

      jQuery.getJSON(thingUrl, function(response) {
        // This stuff should be made recursive and moved out into a function
        var thing = Thing({
          id: response.id,
          name: response.name,
          contents: response.contents
        });

        $(response.children).each(function(index, value) {
          thing.children.push(Thing(value));
        });

        page.history.push(page.listing());
        page.listing(thing);
        page.preview(thing);
      });
    },
    select: function(model, event) {
      // Perhaps this should be a css or style binding to a selected flag.
      // Makes some sense I guess. You could have multiple things selected.
      $("#children .selected").removeClass("selected");
      $(event.currentTarget).addClass("selected");
      page.preview(model);
    },
    addContent: function(element) {
      var contentarea = $(element).find("#contentarea");
      var content = contentarea.val();
      contentarea.val("");
      contentarea.focus();
      this.contents.push({text: content});
    },
    save: function() {
      jQuery.ajax({
        url: baseUrl + "/things",
        type: "post",
        data: {
          "name":      this.name(),
          "parent-id": page.listing().id()
        },
        success: function (result) { console.log(result.message) }
      });
    }
  };
};

function Page(page) {
  return {
    listing: ko.observable(page.listing),
    preview: ko.observable(page.preview || page.listing),
    history: ko.observableArray([]),
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

jQuery(function() {

  var orphansUrl = baseUrl + "/orphans?callback=?";

  jQuery.getJSON(orphansUrl, function(response) {
    var thing = Thing({
      id: response.id,
      name: response.name,
      contents: response.contents
    });

    $(response.children).each(function(index, value) {
      thing.children.push(Thing(value));
    });

    page = Page({
      listing: thing,
      preview: thing
    });

    ko.applyBindings(page);
  });

});


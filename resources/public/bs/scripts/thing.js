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

    open: function() {
      var thingPart = this.id() ? "/bs/things/" + this.id() : "/bs/things";
      Path.history.pushState({}, "", thingPart);
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

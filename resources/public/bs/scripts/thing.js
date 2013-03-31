function Thing(thing) {
  var object = {
    id:       ko.observable(thing.id),

    name:     ko.observable(thing.name),

    parents:  ko.observableArray(thing.parents  || []),

    children: ko.observableArray(thing.children || []),

    contents: ko.observableArray(thing.contents || []),

    parentsWithout: function(parentToExclude) {
      var smallerParents = this.parents().slice(0);
      var index = smallerParents.indexOf(parentToExclude);
      smallerParents.splice(index, 1);
      return smallerParents;
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

    addParentPopover: ko.observable({
      visible: ko.observable(false),
      toggleVisibility: function() {
        this.visible(!this.visible());
      },
      query: ko.observable(""),
      results: ko.observableArray([]),
      select: function() {
        console.log(this);
      }
    }),

    addAsParent: function() {
      page.preview().parents.push(this);
      page.preview().addParentPopover().visible(false);
      return false;
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

  ko.computed(function() {
    var addParentPopover = this;

    if(addParentPopover.query() != "") {
      var params = {query: addParentPopover.query() + "*"};

      $.getJSON('/api/search?callback=?', params, function(results) {
        var things = $(results).map(function(index, result) {
          return createThingFromResponse(result);
        }).toArray();

        addParentPopover.results(things);
      });
    }
  }, object.addParentPopover())

  return object;
};

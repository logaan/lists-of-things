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

function setPreviewAndListing(thing) {
  var preview = thing;
  var listing = thing;

  if (typeof page === 'undefined') {
    page = Page({listing: listing, preview: preview});
    ko.applyBindings(page);
  } else {
    page.listing(listing);
    page.preview(preview);
  }
};

function createThingFromResponse(response) {
  var thing = Thing({
    id:       response.id,
    name:     response.name,
    contents: response.contents
  });

  $(response.children).each(function(index, value) {
    thing.children.push(Thing(value));
  });

  return thing;
};

function loadThing(urlPart) {
  var url = baseUrl + urlPart + "?callback=?";

  jQuery.getJSON(url, function(response) {
    setPreviewAndListing(createThingFromResponse(response));
  });
}

Path.map("/bs/things").to(function(){
  loadThing("/orphans");
});

Path.map("/bs/things/:thing_id").to(function(){
  loadThing("/things/" + this.params.thing_id);
});

ko.bindingHandlers.bootstrapPopover = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    var options = valueAccessor();
    var defaultOptions = {placement: 'bottom', html: true};
    options = $.extend(true, {}, defaultOptions, options);
    $(element).popover(options);
  }
};

jQuery(function() {
  Path.history.listen();

  $("a").click(function(event){
    Path.history.pushState({}, "", $(this).attr("href"));
    event.preventDefault();
  });
});


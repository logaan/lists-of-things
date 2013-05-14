baseUrl = "/api";

Path.map("/things").to(function(){
  loadThing("/orphans");
});

Path.map("/things/:thing_id").to(function(){
  loadThing("/things/" + this.params.thing_id);
});

jQuery(function() {
  Path.history.listen();

  $("a").click(function(event){
    Path.history.pushState({}, "", $(this).attr("href"));
    event.preventDefault();
  });
});

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

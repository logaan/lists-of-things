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
  var listing = thing;

  if (typeof page === 'undefined') {
    page = Page({listing: listing});
    ko.applyBindings(page);
  } else {
    page.listing(listing);
  }
};

function createThingFromResponse(response) {
  var thing = Thing({
    id:       response.id,
    name:     response.name,
    contents: response.contents,
    children: response.children
  });

  return thing;
};

// This should be using api.js
function loadThing(urlPart) {
  var url = baseUrl + urlPart;

  jQuery.getJSON(url, function(response) {
    setPreviewAndListing(createThingFromResponse(response));
  });
}

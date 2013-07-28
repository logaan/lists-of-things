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

// NOTE: This should be using api.js
function loadThing(urlPart) {
  var url = baseUrl + urlPart;

  jQuery.getJSON(url).done(function(response) {
    setPreviewAndListing(createThingFromResponse(response));
  });
}

function setPreviewAndListing(thing) {
  if (typeof page === 'undefined') {
    page = Page(thing);
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

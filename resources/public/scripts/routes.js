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

  jQuery.getJSON(url).done(function(thing) {
    if(!thing.id) { thing.id = "orphans"; }
    repository.populate(thing);
    setListing(thing.id);
  });
}

var listing;

function setListing(id) {
  if (typeof page === 'undefined') {
    page = Page(id);
    ko.applyBindings(page);
  } else {
    page.listingId(id);
  }
};

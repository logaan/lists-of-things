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
    populateRepository(thing);
    setListing(Thing(thing));
  });
}

var repository = {};

function populateRepository(thing) {
  repository[thing.id] = thing;
  _.each(thing.parents,  populateRepository);
  _.each(thing.children, populateRepository);
}

var listing;

function setListing(thing) {
  if (typeof page === 'undefined') {
    page = Page(thing);
    ko.applyBindings(page);
  } else {
    page.listing(listing);
  }
};

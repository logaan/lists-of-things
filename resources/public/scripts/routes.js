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
    setListing(thing.id);
  });
}

var repository = ko.observable({});

function addToRepository(thing) {
  var val = repository();
  val[thing.id] = thing;
  repository(val);
}

function removeFromRepository(id) {
  repository(_.omit(repository(), id.toString()));
}

function getFromRepository(id) {
  return repository()[id];
}

// Loaded in reverse order of completeness
function populateRepository(thing) {
  _.each(thing.parents,  populateRepository);
  _.each(thing.children, populateRepository);
  addToRepository(thing);
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

(function() {

  api = {};

  // NOTE: Should drop all success arguments from this and instead just return
  // the deferred.
  function callAPI(method, url, data, success) {
    jQuery.ajax({
      type:     method,
      url:      baseUrl + url,
      data:     data,
      success:  success
    });
  }

  api.remove = function(thingId, afterRemove) {
    callAPI("delete", "/things/" + thingId, {}, afterRemove);
  };

  api.addContent = function(thingId, content, afterRemove) {
    var data = {"thing-id": thingId, "text": content};
    callAPI("post", "/content", data, afterRemove);
  }

  api.addParent = function(childId, parentId, afterAdd) {
    var data = { "parent-id": parentId };
    callAPI("post", "/things/" + childId + "/parents", data, afterAdd);
  }

  api.removeParent = function(childId, parentId, afterRemove) {
    callAPI("delete", "/things/" + childId + "/parents/" + parentId, {}, afterRemove);
  }

  api.createThing = function(name, parentId, afterCreate) {
    var data = {"name": name, "parent-id": parentId};
    callAPI("post", "/things", data, afterCreate);
  }

  api.search = function(query, withResults) {
    callAPI("get", "/search", {query: query}, withResults);
  }

})();


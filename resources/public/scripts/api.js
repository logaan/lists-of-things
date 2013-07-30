(function() {

  api = {};

  function callAPI(method, url, data) {
    return jQuery.ajax({
      type:     method,
      url:      baseUrl + url,
      data:     data
    });
  }

  api.remove = function(thingId) {
    return callAPI("delete", "/things/" + thingId, {});
  };

  api.addContent = function(thingId, content) {
    var data = {"thing-id": thingId, "text": content};
    return callAPI("post", "/content", data);
  }

  api.addParent = function(childId, parentId) {
    var data = { "parent-id": parentId };
    return callAPI("post", "/things/" + childId + "/parents", data);
  }

  api.removeParent = function(childId, parentId) {
    return callAPI("delete", "/things/" + childId + "/parents/" + parentId, {});
  }

  api.createThing = function(name, parentId) {
    var data = {"name": name, "parent-id": parentId};
    return callAPI("post", "/things", data);
  }

  api.search = function(query) {
    return callAPI("get", "/search", {query: query});
  }

})();


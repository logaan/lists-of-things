(function() {

  api = {};

  function callAPI(method, url, data, success) {
    jQuery.ajax({
      type:     method,
      url:      baseUrl + url + "?callback=?",
      data:     data,
      success:  success,
      dataType: "jsonp"
    });
  }

  function post(url, data, success) {
    callAPI("post", url, data, success);
  }

  function get(url, data, success) {
    callAPI("get", url, data, success);
  }

  function destroy(url, data, success) {
    callAPI("delete", url, data, success);
  }

  api.remove = function(thingId, afterRemove) {
    destroy("/things/" + thingId, {}, afterRemove);
  };

  api.addContent = function(thingId, content, afterRemove) {
    post("/content", {"thing-id": thingId, "text": content}, afterRemove);
  }

  api.addParent = function(childId, parentId, afterAdd) {
    var url = "/things/" + childId + "/parents";
    post(url, {"parent-id": parentId}, afterAdd);
  }

  api.createThing = function(name, parentId, afterCreate) {
    post("/things", {"name": name, "parent-id": parentId}, afterCreate);
  }

  api.search = function(query, withResults) {
    get("/search", {query: query}, withResults);
  }

})();


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

  api.createThing = function(name, parentId, afterCreate) {
    var data = {"name": name, "parent-id": parentId};
    callAPI("post", "/things", data, afterAdd);
  }

  api.search = function(query, withResults) {
    callAPI("get", "/api/search", {query: query}, withResults);
  }

})();


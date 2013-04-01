api = {};

api.remove = function (thingId, afterRemove) {
  var thingPart = "/things/" + thingId;
  var thingUrl = baseUrl + thingPart + "?callback=?";

  jQuery.ajax(thingUrl, {
    type: "DELETE",
    dataType: "jsonp",
    success: afterRemove
  });
};

api.addContent = function (thingId, content, afterRemove) {
  jQuery.ajax({
    url: baseUrl + "/content?callback=?",
    dataType: "jsonp",
    type: "post",
    success: afterRemove,
    data: {
      "thing-id": thingId,
      "text": content
    }
  });
}

api.addParent = function (childId, parentId, afterAdd) {
  jQuery.ajax({
    url: baseUrl + "/things/" + childId + "/parents?callback=?",
    dataType: "jsonp",
    type: "post",
    data: { "parent-id": parentId },
    success: afterAdd
  });
}

api.createThing = function(name, parentId, afterCreate) {
  jQuery.ajax({
    url: baseUrl + "/things?callback=?",
    dataType: "jsonp",
    type: "post",
    data: {
      "name":      name,
      "parent-id": parentId,
    },
    success: afterCreate
  });
}

api.search = function(query, withResults) {
  $.getJSON('/api/search?callback=?', {query: query}, withResults);
}


function NewContent(parentThing) {
  var my = {};

  my.text = ko.observable("");

  my.previewVisible = ko.computed(function() {
    return my.text().length > 0;
  });

  my.preview = ko.computed(function() {
    return my.previewVisible() ? markdown.toHTML(my.text()) : "";
  });

  my.add = function() {
    repository.addContent(parentThing.id(), my.text());
  };

  return my;
}

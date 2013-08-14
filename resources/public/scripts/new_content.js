function NewContent(parentThing) {
  var my = {};

  my.text = ko.observable("");

  my.add = function() {
    repository.addContent(parentThing.id(), my.text());
  };

  return my;
}

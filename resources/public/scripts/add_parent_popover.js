function AddParentPopover() {
  var my = {};

  my.visible = ko.observable(false);

  my.toggleVisibility = function() {
    this.visible(!this.visible());
  };

  my.query = ko.observable("");

  my.results = ko.observableArray([]);

  return my;
}

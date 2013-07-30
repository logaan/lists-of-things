function AddParentPopoverThing(addParentPopover, child, raw) {
  var my = {};

  my.name = ko.observable(raw.name);

  my.id   = ko.observable(raw.id);

  my.addAsParent = function() {
    addParentPopover.visible(false);

    repository.addParent(child.id(), raw);
  };
  
  return my;
}

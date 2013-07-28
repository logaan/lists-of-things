function AddParentPopoverThing(addParentPopover, child, raw) {
  var my = {};

  my.name = ko.observable(raw.name);

  my.id   = ko.observable(raw.id);

  my.addAsParent = function() {
    addParentPopover.visible(false);

    api.addParent(child.id(), my.id()).done(function(result) {
      console.log(result);
    });

    return false;
  };
  
  return my;
}

function AddParentPopoverThing(addParentPopover, child, raw) {
  var my = {};

  my.name = ko.observable(raw.name);

  my.id   = ko.observable(raw.id);

  my.addAsParent = function() {
    addParentPopover.visible(false);

    api.addParent(child.id(), my.id()).done(function(result) {
      // NOTE: This could probably be a repository method.
      addToRepository(raw);

      var rawChild = getFromRepository(child.id());
      rawChild.parents.push(raw);
      addToRepository(rawChild);
    });

    return false;
  };
  
  return my;
}

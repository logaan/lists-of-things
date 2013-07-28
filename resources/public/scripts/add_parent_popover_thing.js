function AddParentPopoverThing(raw) {
  var my = {};

  my.name = ko.observable(raw.name);

  my.addAsParent = function() {
    var currentThing = page.preview();
    currentThing.parents.push(this);
    currentThing.addParentPopover().visible(false);

    var childId = currentThing.id();
    var parentId = this.id();

    api.addParent(childId, parentId).done(function(result) {
      console.log(result);
    });

    return false;
  };
  
  return my;
}

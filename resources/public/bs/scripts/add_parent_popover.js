ko.bindingHandlers.addParentPopover = {
  init: function(element, valueAccessor, allBindingsAccessor, thing) {
    $(element).popover({
      placement: 'bottom',
      html: true,
      content: '<input>',
      title: 'Find new parent'
    });
  }
};


ko.bindingHandlers.bootstrapPopover = {
  init: function(element, valueAccessor, allBindingsAccessor, viewModel) {
    var options = valueAccessor();
    var defaultOptions = {placement: 'bottom', html: true};
    options = $.extend(true, {}, defaultOptions, options);
    $(element).popover(options);
  }
};


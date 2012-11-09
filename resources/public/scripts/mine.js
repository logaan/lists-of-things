jQuery(function () {
  new wysihtml5.Editor("wysihtml5-textarea", {
    toolbar:      "wysihtml5-toolbar",
    parserRules:  wysihtml5ParserRules
  });

  $("#parent-name").autocomplete({
    source: "/results",
    minLength: 2,
    select: function( event, ui ) {
      $("#parent-id").val(ui.item.id);
    }
  });
});

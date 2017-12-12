$(function() {
  $.fn.editable.defaults.mode = "inline";
  $("#importer").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true
  });
  $("#category1").editable();
});

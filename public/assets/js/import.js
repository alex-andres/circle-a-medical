
$(function() {
  $("#importer").steps({
    headerTag: "h3",
    bodyTag: "section",
    transitionEffect: "slideLeft",
    autoFocus: true
  });
  $("#category").editable();
});

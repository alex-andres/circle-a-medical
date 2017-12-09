$(function() {
  $("#jstree").jstree({
    "plugins" : ["checkbox"],
    core: {
      data: [
        {
          text: "Root node",
          state: { opened: true },
          children: [
            {
              text: "Child node 1",
              state: { selected: true },
              icon: "glyphicon glyphicon-flash"
            },
            { text: "Child node 2"}
          ]
        }
      ]
    }
  });
});

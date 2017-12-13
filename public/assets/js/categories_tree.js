
$(document).ready(function() {
    $("#tree_data").jstree({
        "plugins":["checkbox"]
    });

    $("#tree_data").on("changed.jstree",function (e,data) {
    	if (data.selected.length) {
    		$(data.selected).each(function (idx) {
    			var node=data.instance.get_node(data.selected[idx]);
    			console.log("The selected node is: "+node.text);
    		});
    	}
    });
});
  
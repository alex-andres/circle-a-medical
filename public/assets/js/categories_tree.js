
$(document).ready(function() {
    $("#tree_data").jstree({
                'plugins': ["wholerow", "checkbox"],
        'core': {
            'data': [{
                    "text": "Wound care",
                    "state": {
                            "opened": true
                        },
                    "children": [{
                        "text": "Bandaids",
                        "state": {
                            "opened": true
                        },
                        "children": ["Sports","General"]
                    }]
                },
                {
                    "text": "Skin care",
                    "children": [{
                        "text":"Beach",
                        "children":[{
                            "text": "SPF",
                            "icon": "fas fa-sun"
                        }]
                    },"Kids"]
                },
                {
                    "text":"Medicine"
                }
                
            ],
            'themes': {
                'name': 'proton',
                'responsive': true
            }
        }

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
  
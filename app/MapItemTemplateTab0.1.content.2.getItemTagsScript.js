



(new AjaxControlQuery(CoreAjaxUrlRoot, "distinct_attribute_value_list", {
              table: "markerAttributes",
              field: "tags",
              plugin: "Attributes"
            })).addEvent("onSuccess", function(distinct) {
                
                
            callback(defaultTags());

                
            }).execute();




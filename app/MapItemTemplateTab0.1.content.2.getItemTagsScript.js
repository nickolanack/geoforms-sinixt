



(new AjaxControlQuery(CoreAjaxUrlRoot, "distinct_attribute_value_list", {
              table: "markerAttributes",
              field: "tags",
              plugin: "Attributes"
            })).addEvent("onSuccess", function(distinct) {
                
                
                var tags=defaultTags().concat(distinct.values)
                
                callback(tags.filter(function(t, i){
                    if((!t)||t===""){
                        return false;
                    }
                    return tags.indexOf(t)===i;
                }));
           

                
            }).execute();








(new AjaxControlQuery(CoreAjaxUrlRoot, "distinct_attribute_value_list", {
              table: "markerAttributes",
              field: "boundaries",
              plugin: "Attributes"
            })).addEvent("onSuccess", function(distinct) {
                
                var tags=defaultTags;
                if(typeof defaultTags=="string"){
                    tags=JSON.parse(defaultTags);
                }
                var tags=tags.concat(distinct.values)
                
                callback(tags.filter(function(t, i){
                    if((!t)||t===""){
                        return false;
                    }
                    return tags.indexOf(t)===i;
                }));
           

                
            }).execute();




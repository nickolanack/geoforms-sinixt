if(AppClient.getUserType()!="admin"){
    return;
}
var button=new Element('button', {

					html: 'Edit',
					style: "background-color:#EDC84C;",
					"class": "primary-btn add-document edit-document"

				});
				
   
        
        
            
        
        
			


 (new UIModalFormButton(button, application, item, {

					formOptions: {
						_template: "form"
					},
					formName: "wordForm",

				})).addEvent('complete', function() {

				    
				    
				    (new AjaxControlQuery(CoreAjaxUrlRoot, "get_configuration_field", {
                    		'widget': "dictionary",
                    		'field': "dictionary"
                    	})).addEvent('success',function(response){
                    	    
                    	    
                    	    var values=response.value;
                    	    if(!(values&&values.map)){
                    	        return;
                    	    }
                    
                             var files=[];
                             values.forEach(function(v, i){
                                 
                                 if(i==item._getId()){
                                     files.push( {
                            			    name:item.getName(),
                            			    english:item.getEnglish(),
                            			    description:item.getDescription()
                            			});
                            			return;
                                 }
                                 
                                 return files.push(v);
                                 
                                 
                             });
                    
                    
                        (new AjaxControlQuery(CoreAjaxUrlRoot, "set_configuration_field", {
                    		'widget': "dictionary",
                    		'field': {
                    			"name":"dictionary",
                    			"value":files
                    		}
                    	})).addEvent('success',function(response){
                    
                    	}).execute();
                    
                    
                    }).execute();
				    
				    
				    
				    
				    
				    

				});
				
				return button;
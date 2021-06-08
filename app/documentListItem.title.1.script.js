
var button=new Element('button', {

					html: 'Edit',
					style: "background-color:#EDC84C;",
					"class": "primary-btn add-document"

				});
				
   
        
        
            
        
        
			


 (new UIModalFormButton(button, application, item, {

					formOptions: {
						_template: "form"
					},
					formName: "documentForm",

				})).addEvent('complete', function() {

				    
				    
				    (new AjaxControlQuery(CoreAjaxUrlRoot, "get_configuration_field", {
                    		'widget': "documents",
                    		'field': "documents"
                    	})).addEvent('success',function(response){
                    
                             var files=response.value.map(function(v, i){
                                 
                                 if(i==item.getId()){
                                     return {
                            			    name:item.getName(),
                            			    description:item.getDescription()
                            			};
                                 }
                                 
                                 return v;
                                 
                                 
                             })  
                    
                    
                        (new AjaxControlQuery(CoreAjaxUrlRoot, "set_configuration_field", {
                    		'widget': "documents",
                    		'field': {
                    			"name":"documents",
                    			"value":files
                    		}
                    	})).addEvent('success',function(response){
                    
                    	}).execute();
                    
                    
                    }).execute();
				    
				    
				    
				    
				    
				    

				});
				
				return button;
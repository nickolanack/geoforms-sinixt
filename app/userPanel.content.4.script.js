
var item=new MockDataTypeItem({
    id:-1,
    name:"New Document",
    description:"",
    mutable:true
    
});


var button=new Element('button', {

					html: 'Add a document',
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
                    
                             var files=response.value.concat([
                                    {
                            			    name:item.getName(),
                            			    description:item.getDescription()
                            	    }
                                 ]);
                    
                    
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
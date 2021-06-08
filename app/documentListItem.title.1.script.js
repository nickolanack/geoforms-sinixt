
var button=new Element('button', {

					html: 'Edit',
					style: "background-color:#EDC84C;",
					"class": "primary-btn add-document"

				});
				
    item.addEvent('save:once',function(){
        
        
            (new AjaxControlQuery(CoreAjaxUrlRoot, "set_configuration_field", {
        		'widget': "documents",
        		'field': {
        			"name":"documents",
        			"value":[{
        			    name:item.getName()
        			    description:item.getDescription()
        			    
        			    
        			}]
        		}
        	})).addEvent('success',function(response){
        
        	}).execute();
        
        
    })				


 (new UIModalFormButton(button, application, item, {

					formOptions: {
						_template: "form"
					},
					formName: "documentForm",

				})).addEvent('complete', function() {

				    
				    
				    
				    
				    

				});
				
				return button;
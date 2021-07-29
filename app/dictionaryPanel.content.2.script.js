if(AppClient.getUserType()!="admin"){
    return;
}
var item=new MockDataTypeItem({
    id:-1,
    name:"New Sinixt word",
    english:"English word",
    description:"",
    mutable:true
    
});


var button=new Element('button', {

					html: 'Add a word',
					style: "background-color:#EDC84C;",
					"class": "primary-btn add-document"

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
                    
                             var words=response.value.concat([
                                    {
                            			    name:item.getName(),
                            			    english:item.getEnglish(),
                            			    description:item.getDescription()
                            	    }
                                 ]);
                    
                    
                        (new AjaxControlQuery(CoreAjaxUrlRoot, "set_configuration_field", {
                    		'widget': "dictionary",
                    		'field': {
                    			"name":"dictionary",
                    			"value":words
                    		}
                    	})).addEvent('success',function(response){
                    
                    	}).execute();
                    
                    
                    }).execute();
				    
				    

				});
				
				return button;
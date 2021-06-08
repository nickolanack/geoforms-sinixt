

(new AjaxControlQuery(CoreAjaxUrlRoot, "get_configuration_field", {
		'widget': "none",
		'field': "documents"
	})).addEvent('success',function(response){

       callback([
            new MockDataTypeItem({
                name:"Some file one"
                
            }),
        
        ]);


	}).execute();




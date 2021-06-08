

(new AjaxControlQuery(CoreAjaxUrlRoot, "get_configuration_field", {
		'widget': "none",
		'field': "documents"
	})).addEvent('success',function(response){



    
       callback(response.value.map(function(item, i){
            return new MockDataTypeItem({
                id:i,
                name:item.name,
                description:item.description
            });
            
       }));


	}).execute();




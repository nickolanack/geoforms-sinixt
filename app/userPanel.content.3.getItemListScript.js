

(new AjaxControlQuery(CoreAjaxUrlRoot, "get_configuration_field", {
		'widget': "documents",
		'field': "documents"
	})).addEvent('success',function(response){



        ContentFilter.addDocuments(response.value);
        callback(response.value.map(function(item, i){
            var doc= new MockDataTypeItem({
                id:i,
                name:item.name,
                description:item.description,
                mutable:true
            });
            
            return doc;
            
       }));


	}).execute();




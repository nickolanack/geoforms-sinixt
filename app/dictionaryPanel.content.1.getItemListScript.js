

(new AjaxControlQuery(CoreAjaxUrlRoot, "get_configuration_field", {
		'widget': "dictionary",
		'field': "dictionary"
	})).addEvent('success',function(response){



        //ContentFilter.addDictionary(response.value);
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




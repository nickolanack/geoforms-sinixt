(new AjaxControlQuery(CoreAjaxUrlRoot, "user_function", {
		'widget': "userList",

	})).addEvent('success',function(response){
	    callback(response.results.map(function(u){
	        return new MockDataTypeItem(u);
	    }));
	}).execute(); 
		

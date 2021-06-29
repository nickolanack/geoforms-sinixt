(new AjaxControlQuery(CoreAjaxUrlRoot, "user_function", {
		'widget': "userList",

	})).addEvent('success',function(response){
	       
	   application.setNamedValue('userList', response.results);
	    
	    callback(response.results.map(function(u){
	        return new MockDataTypeItem(Object.append(u, {type:"user"}));
	    }));
	}).execute(); 
		

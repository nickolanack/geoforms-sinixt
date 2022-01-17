var removeUser= (new Element('button',{
        html:"Delete User",
        "events":{
            click:function(){
                
                confirm('Are you sure you want to delete this user',function(){
                    (new AjaxControlQuery(CoreAjaxUrlRoot, "delete_user", {
										'plugin': "Users",
										'user': item.getId()
									})).addEvent('success', function() {
                                        wizard.cancel();
									}).execute();
									
                });
               
            }  
        },
        "class":"primary-btn form-btn"
    }));
    
    removeUser.setStyles({
        "background-color": "crimson",
    });
    
    
return removeUser;
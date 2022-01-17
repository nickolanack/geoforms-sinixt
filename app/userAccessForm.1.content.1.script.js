var removeUser= (new Element('button',{
        html:"Delete User",
        "events":{
            click:function(){
                
                if(confirm('Are you sure you want to delete this user')){
                    (new AjaxControlQuery(CoreAjaxUrlRoot, "delete_user", {
										'plugin': "Users",
										'user': item.getId()
									})).addEvent('success', function() {
                                        wizard.close();
									}).execute();
									
                }
               
            }  
        },
        "class":"primary-btn form-btn"
    }));
    
    removeUser.setStyles({
        "background-color": "crimson",
    });
    
    
return removeUser;
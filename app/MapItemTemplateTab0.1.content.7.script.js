if(AppClient.getUserType()!=="admin"){
    return null;
}

var button=new Element('button', {

					html: 'Delete',
					style: "background-color: crimson;color: white;margin-left: 0;",
					"class": "primary-btn add-document",
					events:{click:function(){
					    
					    if(confirm("Are you sure you want to delete this marker?")){					       
					        wizard.close(); 
					        
					        item.destroy(function(success) {
                                if (success) {
                                    NotificationBubble.Make('', 'Deleted item');
                                } else {
                                    NotificationBubble.Make('', 'Failed to delete item');
                                }
                            });
					    }
					    
					}}

				});
				
				
return button;
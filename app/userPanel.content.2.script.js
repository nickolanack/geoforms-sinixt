if(AppClient.getUserType()!="admin"){
    return;
}



var userInvite=(new MockDataTypeItem({
            mutable: true,
            name: '',
            email:''
        }));


var InviteRequest=new Class_({
            Extends:AjaxControlQuery,
            initialize:function(credentials){
                this.parent(FrameworkCMSAjaxUrlRoot, "invite", credentials);
            }
        });

        userInvite.addEvent('save',function(){

        	(new InviteRequest({
                	name:userInvite.getName(),
                	email:userInvite.getEmail(),
                	'plugin':"Users"
                }).addEvent("onSuccess",function(response){
                        
                	if(response.error){
                        NotificationBubble.Make(response.error);
                    }

                        if(response.success&&response.subscription){

                            var container=new Element("div", {"class":"progress"});

                            (new UITaskProgressSubscription(container, response)).addEvent("complete",function(){
                            	
                            })
                            return;
                        }

                    })).execute();


        });


var button=new Element('button', {

					html: 'Invite User',
					//style: "background-color:#EDC84C;",
					"class": "primary-btn add-user"

				});

 (new UIModalFormButton(button, application, userInvite, {

					formOptions: {
						_template: "form"
					},
					formName: "inviteUserForm",

				})).addEvent('complete', function() {

				    
				    
				  
                    
                })

				
				return button;
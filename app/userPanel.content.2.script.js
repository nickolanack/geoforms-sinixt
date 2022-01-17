if(AppClient.getUserType()!="admin"){
    return;
}

var item=new MockDataTypeItem({
    id:-1,
    name:"New Document",
    description:"",
    mutable:true
    
});


var button=new Element('button', {

					html: 'Invite User',
					//style: "background-color:#EDC84C;",
					"class": "primary-btn add-user"

				});

 (new UIModalFormButton(button, application, item, {

					formOptions: {
						_template: "form"
					},
					formName: "inviteUserForm",

				})).addEvent('complete', function() {

				    
				    
				  
                    
                    }).execute();

				
				return button;
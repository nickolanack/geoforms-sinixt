
var item=new MockDataTypeItem({
    id:-1,
    name:"New Document",
    description:"",
    mutable:true
    
});


var button=new Element('button', {

					html: 'Add a document',
					style: "background-color:#EDC84C;",
					"class": "primary-btn add-document"

				});

 (new UIModalFormButton(button, application, item, {

					formOptions: {
						_template: "form"
					},
					formName: "documentForm",

				})).addEvent('complete', function() {

				    

				});
				
				return button;
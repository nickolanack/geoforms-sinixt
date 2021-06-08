
var button=new Element('button', {

					html: 'Edit',
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
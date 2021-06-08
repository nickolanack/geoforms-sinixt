
var button=new Element('button', {

					html: 'Rest Password',
					style: "background-color:#EDC84C;",
					"class": "primary-btn reset-password add-document"

				});

(new UIModalFormButton(button, application, item, {

					formOptions: {
						_template: "form"
					},
					formName: "resetPassword",

				}))
				
				return button;
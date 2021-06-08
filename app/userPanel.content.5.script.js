
var button=new Element('button', {

					html: 'Rest Password',
					style: "background-color:#EDC84C;",
					"class": "primary-btn reset-password"

				});

(new UIModalFormButton(button, application, item, {

					formOptions: {
						_template: "form"
					},
					formName: "resetPassword",

				}))
				
				return button;
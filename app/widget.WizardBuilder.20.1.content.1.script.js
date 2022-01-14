return null;

var button=new Element('button', {

					html: 'Create account',
					style: "background-color:#EDC84C;",
					"class": "primary-btn other-btn",
					events:{click:function(){
					    wizard.displayNext();
					}}

				});
				
				
    return button
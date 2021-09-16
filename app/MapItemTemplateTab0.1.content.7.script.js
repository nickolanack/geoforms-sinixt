var button=new Element('button', {

					html: 'Delete',
					style: "background-color:#EDC84C;",
					"class": "primary-btn add-document",
					events:{click:function(){
					    
					       wizard.cancel(); 
					    
					}}

				});
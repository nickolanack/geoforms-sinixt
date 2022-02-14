            var uiview;

		

			(function(){

    
				uiview=<?php
				
				
				    $parameters=(object)array();
				
					Modules();
					$module = GetModule('UIView');
					$module->setParameters( $parameters);
					echo $module->display('map', 'AppClient', 'user',  $parameters)

				?>
			
			})();

			uiview.load(application, element, null);
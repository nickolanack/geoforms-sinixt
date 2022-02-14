            var uiview;

		

			(function(){

    
				uiview=<?php
				
				
				    $parameters=(object)array(
				        "namedView"=>"disclaimerPeriods"    
				    );
				
					Modules();
					$module = GetModule('UIView');
					$module->setParameters( $parameters);
					echo $module->display('map', 'AppClient', 'user',  $parameters)

				?>
			
			})();

			uiview.load(map, element, null);
			
			console.error('disclaimer');
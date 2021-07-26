

if($layer->getId()!==17||$layer->getId()!==26){
    
    
   //error_log(print_r($feature['icon'],true));
   $parseSettings=$layer->getParseSettings();
   if(key_exists('filter-icon-substr', $parseSettings)){
       
       $filter = $parseSettings->{'filter-icon-substr'};
       if(is_array($filter)){
           
           foreach($filter as $filterStr){
               if(key_exists('icon', $feature)&&strpos($feature['icon'],$filterStr)!==false){
                   return true;
               }
           }
           return false;
       }
       
       return key_exists('icon', $feature)&&strpos($feature['icon'],$filter)!==false;
   }
   
   if(key_exists('filter-type', $parseSettings)){
       return $feature['type']===$parseSettings->{'filter-type'};
   }
    
}


return true;
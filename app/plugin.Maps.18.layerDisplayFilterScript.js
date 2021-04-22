

if($layer->getId()!==17){
    
    
   //error_log(print_r($feature['icon'],true));
   $parseSettings=$layer->getParseSettings();
   if(key_exists('filter-icon-substr', $parseSettings)){
       return key_exists('icon', $feature)&&strpos($feature['icon'], $parseSettings->{'filter-icon-substr'})!==false;
   }
   
   if(key_exists('filter-type', $parseSettings)){
       return $feature['type']===$parseSettings->{'filter-type'};
   }
    
}


return true;
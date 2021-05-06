
unset($feature->marker->style);
if($feature->layerId!=17){
    
   $layer = (new \spatial\LayerLoader())->fromId($feature->layerId);
   $parseSettings=$layer->getParseSettings();
   if(key_exists('use-icon', $parseSettings)){
       $feature->marker->style=$parseSettings->{'use-icon'};
   }
    
}

$feature->layerId=17;
error_log(print_r($feature, true));
return $feature;
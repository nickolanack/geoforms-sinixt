$feature->layerId=17;
unset($feature->marker->style);
error_log(print_r($feature, true));
return $feature;
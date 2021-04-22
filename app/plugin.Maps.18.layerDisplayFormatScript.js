if($feature['type']==='marker'){
    
    $feature['icon']=UrlFrom($layer->getIcon().'?thumb=>48x>48');
}

return $feature;
if($feature['type']==='marker'){
    try{
    $feature['icon']=UrlFrom($layer->getIcon().'?thumb=>48x>48');
    }catch(\Exception $e){
        error_log($e->getMessage());
    }
}

return $feature;
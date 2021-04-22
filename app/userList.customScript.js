if(!GetClient()->isAdmin()){
    return array();
}

return array("results"=>array_map(function($u){
    
    return $u;
    
},GetClient()->listUsers()));
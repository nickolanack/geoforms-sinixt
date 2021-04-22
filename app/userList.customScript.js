if(!GetClient()->isAdmin()){
    return array();
}
GetPlugin('Attributes');
return array("results"=>array_map(function($u){
    
    
    
		
		
	$access=(new \attributes\Record('userTimedAccess'))->getValues($u['id'], 'user');
    
    $u['access']=$access;
    
    return $u;
    
},GetClient()->listUsers()));
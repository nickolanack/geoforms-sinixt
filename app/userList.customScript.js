if(!GetClient()->isAdmin()){
    return array('results'=>array());
}
GetPlugin('Attributes');

$list=array_map(function($u){
    
	$access=(new \attributes\Record('userTimedAccess'))->getValues($u['id'], 'user');
    $u['roles']=GetClient()->getUsersAccessGroups($u['id']);
    $u['access']=$access;
    
    return $u;
    
},GetClient()->listUsers());



usort($list, function($a, $b){
    
    
    
    return strcmp($a['name'], $b['name']);
});


return array("results"=>$list);
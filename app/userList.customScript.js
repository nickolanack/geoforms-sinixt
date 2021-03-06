

$users=array();

if(!GetClient()->isAdmin()){
   $users=array(GetClient()->getUserMetadata());
}else{
    $users=GetClient()->listUsers();
}
GetPlugin('Attributes');

$list=array_map(function($u){
    
	$access=(new \attributes\Record('userTimedAccess'))->getValues($u['id'], 'user');
    $u['roles']=GetClient()->getUsersAccessGroups($u['id']);
    $u['access']=$access;
    
    return $u;
    
}, $users);



usort($list, function($a, $b){
    
    $arole=in_array('special', $a['roles']);
    $brole=in_array('special', $b['roles']);
    
    if(!($arole&&$brole)){
        if($arole){
            return -1;
        } 
        
         if($brole){
            return 1;
        }
        
    }
    
    
    
    return strcmp($a['name'], $b['name']);
});


return array("results"=>$list);
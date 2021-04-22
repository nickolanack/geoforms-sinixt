if(!GetClient()->isAdmin()){
    return array();
}

return array("results"=>GetClient()->listUsers());
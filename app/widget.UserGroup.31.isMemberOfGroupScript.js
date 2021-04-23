
if(GetClient()->isUserGuest($userid)){
    return false;
}

GetPlugin('Attributes');
$attributes=(new \attributes\Record('userTimedAccess'))
			->getValues($userid, 'user');
			
$date=$attributes['editAccessEnd'];
if(empty($date)){
    return false;
}

return intval($date)>time();
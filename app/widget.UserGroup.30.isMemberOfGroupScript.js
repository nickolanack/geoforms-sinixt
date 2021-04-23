
if(GetClient()->isUserGuest($userid)){
    return false;
}

GetPlugin('Attributes');
$attributes=(new \attributes\Record('userTimedAccess'))
			->getValues($userid, 'user');
			
$date=$attributes['viewAccessEnd'];
if(empty($date)){
    return false;
}

return intval($date)>time();
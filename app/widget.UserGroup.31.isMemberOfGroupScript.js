
if(GetClient()->isGuest()){
    return false;
}

GetPlugin('Attributes');
$attributes=(new \attributes\Record('userTimedAccess'))
			->getValues(GetClient()->getId(), 'user');
			
$date=$attributes['editAccessEnd'];
if(empty($date)){
    return false;
}

return strtotime($date)>time();
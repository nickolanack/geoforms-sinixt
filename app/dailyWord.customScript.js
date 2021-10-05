

$list=GetWidget('dictionary')->getParameter('dictionary');
if(empty($list)){
    $list=array((object) array('name'=>'add some words', 'english'=>'', 'description'=>''));
}


//https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
$fisherYatesShuffle=function(&$items, $seed)
{
    @mt_srand($seed);
    for ($i = count($items) - 1; $i > 0; $i--)
    {
        $j = @mt_rand(0, $i);
        $tmp = $items[$i];
        $items[$i] = $items[$j];
        $items[$j] = $tmp;
    }
};

//shuffle($list);

$fisherYatesShuffle($list, 0);

$day=intval(date('z'))%count($list);



return array(
        'word'=>$list[$day];
    );
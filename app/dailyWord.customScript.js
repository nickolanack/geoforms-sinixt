

$list=GetWidget('dictionary')->getParameter('dictionary');
if(empty($list)){
    $list=array((object) array('name'=>'add some words', 'english'=>'', 'description'=>''));
}
shuffle($list);
return array(
        'word'=>array_shift($list)
    );
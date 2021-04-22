


var base='https://sinixt.geoforms.ca/php-core-app/core.php?format=ajax&iam=administrator&task=layer_display&knakyutf';
var json={"layerId":17,"format":"kml"}

tile.addEvent('click', function(){
    
    window.open(base+"&json="+JSON.stringify(json),'__blank');
    
});

var layers=application.getLayerManager().getLayers();
var visible=layers.filter(function(layer){
    return layer.isVisible();
});

if(visible.length==0){
    layers.forEach(function(layer){
        layer.show();
    })
}

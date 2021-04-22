console.log('test');

var kind=wizard.getData().Attribute_markerAttributes_Object.kind;
if(typeof kind=="string"){
    var map=viewControllerApp;
    
    var sets=map.getNamedValue('IconSets');
    var iconset=sets[0].layerMap;
    
    map.getLayerManager().getLayers().map(function(layer){
        if(layer.getName()===kind){
            item.setLayer(layer);
            item.setIcon(MapFactory.BestIconFromLayer(layer, iconset)+'?thumb=>32x>32');
        }
    })
    
    
    
}
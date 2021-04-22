if((!value)||value==""){
    object.value= item.getTitle();
    if(object._module){
        object._module.setValue(object.value);
    }
}
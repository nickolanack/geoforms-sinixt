
if(item.getRoles().indexOf('special')>=0){
    return null;
}


var btn= (new ModalFormButtonModule(application, item,{
        label:"Set Perimission",
        formName:"userAccessForm",
        formOptions:{
            _template:"form"
        },
        //hideText:true,
        "class":"primary-btn"
    }));


return btn;
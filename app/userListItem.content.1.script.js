
if(item.getRoles().indexOf('special')>=0){
    return null;
}


return (new ModalFormButtonModule(application, AppClient,{
        label:"Set Perimission",
        formName:"userAccessForm",
        formOptions:{
            _template:"form"
        },
        //hideText:true,
        "class":"primary-btn"
    }));
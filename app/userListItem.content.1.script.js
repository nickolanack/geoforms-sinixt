



if(item.getRoles().indexOf('special')>=0){
    return null;
}

if(AppClient.getUserType()!="admin"){
    return null;
}

var setAccess= (new ModalFormButtonModule(application, item,{
        label:"Set Permission",
        formName:"userAccessForm",
        formOptions:{
            _template:"form"
        },
        //hideText:true,
        "class":"primary-btn"
    }));


var revokeAccess= (new Element('button',{
        "events":{
            click:function(){
                console.log('click');
            }  
        },
        "class":"primary-btn"
    }));


return [revokeAccess, setAccess];
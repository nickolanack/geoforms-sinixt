



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
    
    
    
var read=item.getAccess().editAccessEnd;
var write=item.getAccess().readAccessEnd;
var hasAccess=function(time){
  
  if(parseInt(time)>parseInt((new Date()).getTime()/1000)){
     return true;
  }
  return false;
    
};

var btns=[];

if(hasAccess()||hasAccess()){

var revokeAccess= (new Element('button',{
        html:"Revoke",
        "events":{
            click:function(){
                console.log('click');
            }  
        },
        "class":"primary-btn form-btn"
    }));
    
    revokeAccess.setStyles({
        "background-color": "crimson",
        "margin-left": "5px"
    });

    btns.push(revokeAccess);
    
}


btns.push(setAccess);

return btns;
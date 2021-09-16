if(AppClient.getUserType()=="guest"){
    list.tab=[];
    list.footer=[];
    return list;
}


if(AppClient.getUserType()!=="admin"){
    list.footer=[];
    list.tab.pop();
}else{
    
    list.tab.push(new Element('button',{html:"Edit", events:{click:function(){
        console.error('todo: detect tab '+(application.getNamedValue('currentTabPage')));
        
        var form="MapItemTemplateTab"+application.getNamedValue('currentTabPage');
        
        if(!application.getDisplayController().hasNamedFormView(form)){
            
            alert('missing: '+form);
            form="MapItemTemplate";
        }
        
        (new UIModalDialog(application, item, {	"formName":form, "formOptions":{"-template":"form"}})).show();
        
    }}}));    
    
}

var users=application.getNamedValue('userList')//, function(users){
   users.forEach(function(user){
       if(user.id+""===AppClient.getId()+""){
           if(user.roles.indexOf("special")<0&&user.roles.indexOf("specialView")<0){
               list.tab.splice(1, 2, null, null); //remove 2 tabs (tabs will keep thier indexes)
           }
           
           
       }
   })
//})

return list;



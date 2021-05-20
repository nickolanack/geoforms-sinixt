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

application.getNamedValue('userList', function(list){
    console.log(list);
})

return list;



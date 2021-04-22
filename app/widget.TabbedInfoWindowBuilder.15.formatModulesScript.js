if(AppClient.getUserType()!=="admin"){
    list.footer=[];
    list.tab.pop();
}else{
    
    list.tab.push(new Element('button',{html:"Edit", events:{click:function(){
        
        (new UIModalDialog(application, item, {	"formName":"MapItemTemplate", "formOptions":{"-template":"form"}})).show();
        
    }}}));    
    
}


return list;



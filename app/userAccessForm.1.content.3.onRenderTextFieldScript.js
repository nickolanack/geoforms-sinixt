var div=new Element('container',{"class":"btn-group-access"});

var toTimeStamp=function(increment){
    
    return (new Date().getTime() + 24*3600*1000 * increment)/1000;
}


div.appendChild(new Element('button',{
    html:"1 day",
    events:{click:function(){
      textField.setValue(toTimeStamp(1))  
    }}
}))

div.appendChild(new Element('button',{
    html:"2 days",
    events:{click:function(){
      textField.setValue(toTimeStamp(2))  
    }}
}))

div.appendChild(new Element('button',{
    html:"1 week",
    events:{click:function(){
      textField.setValue(toTimeStamp(7))  
    }}
}))

div.appendChild(new Element('button',{
    html:"Custom",
    events:{
        click:function(){
            wizard.displayStep(3)
        }
    }
}))





textField.getElement().appendChild(div);
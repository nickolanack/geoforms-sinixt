var div=new Element('container',{"class":"btn-group-access"});


var toTime=function(t){
    
    return Math.floor(((new Date()).getTime()+1000*3600*24*t)/1000);
    
}

div.appendChild(new Element('button',{
    html:"1 day",
    events:{click:function(){
        textField.setValue(toTime(1))
    }}
}))

div.appendChild(new Element('button',{
    html:"2 days",
    events:{click:function(){
        textField.setValue(toTime(2))
    }}
}))

div.appendChild(new Element('button',{
    html:"1 week",
    events:{click:function(){
        textField.setValue(toTime(3))
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
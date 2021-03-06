var div=new Element('container',{"class":"btn-group-access"});

var label=new Element('label');

div.appendChild(label);

var toTime=function(t){
    
    label.innerHTML=t+" day"+(t==1?"":"s")+". ";
    label.addClass('valid');
    
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
        textField.setValue(toTime(7))
    }}
}))

div.appendChild(new Element('button',{
    html:"Custom",
    events:{
        click:function(){
            if(textField.getElement().hasClass('show-custom')){
                textField.getElement().removeClass('show-custom');
                return;
            }
            textField.getElement().addClass('show-custom')
        }
    }
}))


div.appendChild(new Element('button',{
    html:"clear",
    "class":"clear",
    events:{click:function(){
        textField.setValue(0)
    }}
}))





textField.getElement().appendChild(div);
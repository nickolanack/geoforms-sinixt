var div=new Element('container',{"class":"btn-group-access"});


div.appendChild(new Element('button',{
    html:"1 day"
}))

div.appendChild(new Element('button',{
    html:"2 days"
}))

div.appendChild(new Element('button',{
    html:"1 week"
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
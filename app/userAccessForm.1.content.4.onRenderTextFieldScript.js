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
    html:"Custom"
}))


textField.getElement().appendChild(div);
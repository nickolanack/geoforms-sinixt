var value=textField.getValue();
if((!value)||value==""){
    textField.setValue(item.getTitle());
}
inputElement.disabled=true;
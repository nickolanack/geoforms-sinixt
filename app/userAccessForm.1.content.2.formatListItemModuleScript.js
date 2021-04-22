childView.getElement().addEvent('click', function(){
    
    var el=childView.getElement();
    if(el.hasClass('selected')){
        el.removeClass('selected');
        return;
    }
    
            el.addClass('selected');

    
})
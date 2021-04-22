var ContentFilter=(function(){
    
    
    var ContentFilter=new Class({
        
        



        
    });
    

    ContentFilter.ParseNameSection=function(text){
    	return text.split("\n\n").shift().split('Layer Keywords:').shift();
    }

    ContentFilter.ParseNameSectionHtml=function(text){
    	return ContentFilter.ParseNameSection(text).split("\n").join("<br/>");
    }


    ContentFilter.ParseSourceSection=function(text){
    	var text= text.split("\n\n").slice(1).join('\n\n');

		if(text.indexOf('Layer Keywords:')>=0){
		    text.split('Layer Keywords:').pop().split('\n\n').slice(1).join('\n\n');
		}

		return text.split('Personal Notes:').shift();
    }

    ContentFilter.ParseSourceSectionHtml=function(text){
    	return ContentFilter.ParseSourceSection(text).split("\n").join("<br/>");
    }

    ContentFilter.ParseNotesSection=function(text){
		if (text.indexOf('Personal Notes:') == -1) {
			return '';
		}

		return text.split('Personal Notes:').pop();
    }

    ContentFilter.ParseNotesSectionHtml=function(text){
    	return ContentFilter.ParseNotesSection(text).split("\n").join("<br/>");
    }



    return new ContentFilter();
    
})()
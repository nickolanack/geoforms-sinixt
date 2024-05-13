var title='Sinixt';
var sub ='<p>'+`Sinixt are Interior Salishan Peoples whose təmxʷúlaʔxʷ (traditional territory) lies in the Columbia Mountains. 
Their Snsəlxcin Dialect reflects the globally unique Inland Temperate Rainforest of their homeland. 
Declared extinct for the purposes of the Indian Act by the Canadian government in 1956, 
Sinixt continue their work of resurgence from bureaucratic genocide through initiatives like this site, 
which offers information on their millennia-long and ongoing relationship to the land.`+'</p>';

var header=new Element('heading');
var titleEl=header.appendChild(new Element('h1', {html:title}));
var descriptionEl=header.appendChild(new Element('h2', {html:sub}));
 
 
 
 (new AjaxControlQuery(CoreAjaxUrlRoot, "user_function", {
		'widget': "dailyWord"
		
	})).addEvent('success',function(response){
	    
	       var word=response.word;
	       var name=word.name;
	       var english=word.english;
	       var description=(new HTMLTagParser()).stripSafeMedia(word.description); //JSTextUtilities.StripTags(word.description);
	       
	       var audios=(new HTMLTagParser()).parseAudios(word.description); //JSTextUtilities.ParseAudios(word.description);
	       
	       
	       
	      var wotd= titleEl.appendChild(new Element('span', {html:'word of the day', "class":"wotd-span"}));
	      var wordEl=wotd.appendChild(new Element('span',{html:name, "class":"wotd-item"}));
	      
	      if(audios.length>0){
	       (new AudioModule({
					textQuery: function(callback) {
						callback(audios[0].html);
					}
			})).load(null, wordEl, null);
			wordEl.addClass('has-audio');
	      }else{
	          wordEl.addClass('no-audio');
	      }
	      
	      new UIPopover(wordEl,{
            description:`<h2>`+name+`</h2>
            
            en: `+english+(description?`<br/>definition: `+description:``),
            anchor:UIPopover.AnchorAuto()
	      });
  
	}).execute(); 
 
 
 
return header;
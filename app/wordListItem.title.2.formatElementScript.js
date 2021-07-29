

 var audios=JSTextUtilities.ParseAudios(item.getDescription());

var wordEl=el.appendChild(new Element('span',{html:"", "class":"wotd-item"}));
	      
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
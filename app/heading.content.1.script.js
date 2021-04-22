var title='Sinixt';
var sub ='<p>'+`Sinixt are Interior Salishan Peoples whose təmxʷúlaʔxʷ (traditional territory) lies in the Columbia Mountains. 
Their Sn-səlxcin Dialect reflects the globally unique Inland Temperate Rainforest of their homeland. 
Declared extinct for the purposes of the Indian Act by the Canadian government in 1956, 
Sinixt continue their work of resurgence from bureaucratic genocide through initiatives like this site, 
which offers information on their millennia-long and ongoing relationship to the land.`+'</p>';

var header=new Element('heading');
 header.appendChild(new Element('h1', {html:title}));
 header.appendChild(new Element('h2', {html:sub}));
 
return header;
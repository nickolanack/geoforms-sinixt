//return text.split("\n\n").shift().split('Layer Keywords:').shift();


var initialText=false

this.addInputFilter(function(text){
    console.error('input filter')
    
    if(initialText===false){
        initialText=text;
    }
    
    return text.split("\n\n").shift().split('Layer Keywords:').shift();
});
this.addOutputFilter(function(text){
    console.error('input filter');
    var chunks=initialText.split("\n\n");
    var section=chunks.shift().split('Layer Keywords:')
    section[0]=text;
    chunks[0]=section.join('Layer Keywords:');
    var formatted=chunks.join("\n\n");
    return initialText;
    
});
//return text.split("\n\n").shift().split('Layer Keywords:').shift();

this.addInputFilter(function(text){
    console.error('input')
    return text;
});
this.addOutputFilter(function(text){
    console.error('output')
    return text;
});
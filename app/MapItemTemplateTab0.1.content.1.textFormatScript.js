//return text.split("\n\n").shift().split('Layer Keywords:').shift();

object._module.getTextField().addInputFilter(function(text){
    console.error('input')
    return text;
});
object._module.getTextField().addOutputFilter(function(text){
    console.error('output')
    return text;
});
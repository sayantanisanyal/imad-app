//counter code

var button = document.getElementById('counter');
var counter=0;
button.onclick =function(){
    //request the counter endpoint
    
    
    
    // store it into a variable
    
    
    
    //render the variable in the correct span!!
    counter=counter+1;
    var span= document.getElementById('count');
    span.innerHTML=counter.toString();
    
};
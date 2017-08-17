//counter code
var counter=0;
var button = document.getElementById('counter');
button.onclick =function(){
    //request the counter endpoint
    
    
    
    // store it into a variable
    
    
    
    //render the variable in the correct span!!
    counter=counter+1;
    var span= document.getElementById('count');
    span.innerHTML=counter.toString();
    
};
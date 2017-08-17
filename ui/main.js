//counter code
var counter=0;
var buttn = document.getElementById('counter');

buttn.onclick =function(){
    //request the counter endpoint
    
    
    
    // store it into a variable
    
    
    
    //render the variable in the correct span!!
    counter=counter+1;
    var spn= document.getElementById('count');
    spn.innerHTML=counter.toString();
    
};
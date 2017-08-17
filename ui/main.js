//counter code

var button = document.getElementById('counter');

button.onclick =function(){
    // create a request
    var request= new XMLHttpRequest();
    
    // store it into a variable
    request.onreadystatechange= function(){
        if(request.readystate===XMLHttpRequest.DONE)
        {
            //take some action
            if(request.status===200)
            {
               var counter=request.responseText;
               var span=document.getElementById('count');
               span.innerHTML=counter.toString();
               }
        }
        //else ignore 
    };
    
    //make a request
    request.open('GET','http://sayantanisanyal21.imad.hasura-app.io/counter',true);
    request.send(null);
    
  
};
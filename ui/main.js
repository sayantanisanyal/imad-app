//counter code
var button = document.getElementById('counter');
button.onclick =function(){
    // create a request
    var request= new XMLHttpRequest();
    // store it into a variable
    request.onreadystatechange= function(){
        if(request.readyState===XMLHttpRequest.DONE)
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

// submit code
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submitBtn');
submit.onclick =function(){
     var request= new XMLHttpRequest();
    // store it into a variable
    request.onreadystatechange= function(){
        if(request.readyState===XMLHttpRequest.DONE)
        {
            //take some action
            if(request.status===200)
            {
                var names= request.responseText;
                names=JSON.parse(names);
                var list=[];
  
                for(var i=0;i<names.length;i++)
                {
                    list+='<li>'+names[i]+'</li>';
                }
                var ui=document.getElementById('ulist');
                ui.innerHTML=list;
            }
        //else ignore
        }
    };
    //make a request
    request.open('GET','http://sayantanisanyal21.imad.hasura-app.io/submit-name?name='+ name,true);
    request.send(null);

}; 
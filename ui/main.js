console.log('Loaded!');
var element= document.getElementById('main-class');
element.innerHTML='hello world';

var image=document.getElementById('img');
var marginLeft=0;
var moveRight= function(){
    marginLeft=maginLeft+10;
    image.style.marginLeft=marginLeft+'px';
}
image.onclick = function(){
    var interval= setInterval(moveRight,100);
    
};
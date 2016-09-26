console.log('Loaded!');
var mtext = document.getElementById('main-text');
var moveimg = document.getElementById('madi');

var marginLeft=0;
function moveRight() {
    marginLeft=marginLeft+10;
    moveimg.style.marginLeft= marginLeft + "px";
}
moveimg.onClick= function (){
//    moveimg.style.marginLeft = '100px' ;
  var interval = setInterval(moveRight,100); 
};

mtext.innerHTML = 'New Values!';
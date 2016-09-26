console.log('Loaded!');
var mtext = document.getElementById('main-text');
mtext.innerHTML = 'New Values!';

var marginLeft=0;

var moveimg = document.getElementById('madi');

moveimg.onClick = function () {
    moveimg.style.marginLeft = '100px';
    var interval = setInterval(moveRight,100); 
};

function moveRight() {
    marginLeft = marginLeft+10;
    moveimg.style.marginLeft= marginLeft + "px";
}


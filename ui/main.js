console.log('Loaded!');
var mtext = document.getElementById('main-text');

mtext.innerHTML = 'New Values Loaded!';

var moveimg = document.getElementById('madi');
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 10;
    moveimg.style.marginLeft= marginLeft + 'px';
}

moveimg.onClick = function () {
    var interval = setInterval(moveRight, 100); 
};


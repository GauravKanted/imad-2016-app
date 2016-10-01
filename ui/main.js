console.log('Loaded!');
var mtext = document.getElementById('main-text');

mtext.innerHTML = 'New Values Loaded!';

var moveimg = document.getElementById('madi');
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 5;
    moveimg.style.marginLeft = marginLeft + 'px';
}

moveimg.onclick = function () {
    var interval = setInterval(moveRight, 100); 
};

var button = document.getElementById('counter');
button.onclick = function() {
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};

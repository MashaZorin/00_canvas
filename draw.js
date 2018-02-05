var canvas = document.getElementById('slate');
var ctx = canvas.getContext('2d')

var clear = document.getElementById("clear");
var toggle = document.getElementById("toggle");


var shape = 0;
//0 is square
//1 is circle


var clear_canvas = function(e){
    ctx.clearRect(0,0,500,500);
}

var change_shape = function(e){
    if (shape == 0){
	shape = 1;
    }
    else{
	shape = 0;
    }
}

var create_shape = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    
    if (shape == 0){
	ctx.fillStyle = 'red';
	ctx.fillRect(x, y, 30, 30);
    }
    else{
	ctx.beginPath();
	ctx.arc(x, y, 15, 0, 2*Math.PI);
    	ctx.fill();
    }
}

canvas.addEventListener('click', create_shape);
toggle.addEventListener('click', change_shape);
clear.addEventListener('click', clear_canvas);

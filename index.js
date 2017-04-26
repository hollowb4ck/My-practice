var canvas = document.getElementById('canv');
var pen = canvas.getContext("2d");

function trafficDraw( left, top, color ){
    pen.beginPath();
    pen.fillStyle = color;
    pen.arc( left, top, 20, 0, 2 * Math.PI, false );
    pen.fill();
}

function background(){
  pen.fillStyle = 'black';
  pen.fillRect( 50, 65, 100, 170);
  trafficDraw( 100, 100, "red" );
  trafficDraw( 100, 150, "yellow" );
  trafficDraw( 100, 200, "green" );
}
background();

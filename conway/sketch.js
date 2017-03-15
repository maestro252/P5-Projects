var board;
var t;
function setup(){
  var tmp = new Tile(-1, -1);
  createCanvas(Math.pow(tmp.side, 2), Math.pow(tmp.side, 2));
  frameRate(5);
  //var b  = createButton("Update");
  //b.mousePressed(refresh);
  background(51);
  board = new Board();
  board.show();
}

function draw(){
  background(51);
  board.update();
  board.show();
}

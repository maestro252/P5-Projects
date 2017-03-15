function Tile(x, y){
  this.x = x;
  this.y = y;
  this.alive = false;
  this.prev = false;
  this.side = 20;
}

Tile.prototype.show = function () {
  if(this.alive){
    fill(255);
    noStroke();
    rect(this.x * this.side, this.y * this.side, this.side, this.side, 5);
  }
}

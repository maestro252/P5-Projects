function Board(){
	var t = new Tile(0,0);
	var size = t.side;
	//create board size x size
	this.tiles = new Array(size);
	for (var i = 0; i < this.tiles.length; i++) {
		this.tiles[i] = new Array(size);
	}

	//create tiles and add them to the board
	for (var i = 0; i < this.tiles.length; i++) {
		for (var j = 0; j < this.tiles[0].length; j++) {
			var t = new Tile(j, i);
			t.alive = random(0, 3) > 2.5 ? true : false;
			this.tiles[i][j] = t;
		}
	}
}

Board.prototype.update = function() {
	for(var i = 0; i < this.tiles.length; i++){
		for(var j = 0; j < this.tiles.length; j++){
			this.tiles[i][j].prev = this.tiles[i][j].alive;
		}
	}
	for(var i = 0; i < this.tiles.length; i++){
		for(var j = 0; j < this.tiles[i].length; j++){
			var liveCount = 0;
			for(var k = -1; k < 2; k++){
				for(var l = -1; l < 2; l++){
					//if k and l are different than 0... not checking himself
					try{
						if(!(k === 0 && l === 0)){
							liveCount += this.tiles[i+k][j+l].prev;
						}
					}catch(err){
						//console.log("in a corner!");
					}
				}
			}
			//console.log(i, j, liveCount);
			if(this.tiles[i][j].prev){
				// underpopulation
				if(liveCount < 2){
					this.tiles[i][j].alive = false;
				}
				// overpopulation
				if(liveCount > 3){
					this.tiles[i][j].alive = false;
				}
			}else{
				if(liveCount === 3){
					this.tiles[i][j].alive = true;
				}
			}
		}
	}
}

Board.prototype.show = function (){
	for(var i = 0; i < this.tiles.length; i++){
		for(var j = 0; j < this.tiles.length; j++){
			this.tiles[i][j].show();
		}
	}
}

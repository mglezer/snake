'use strict';

function Board(canvas, width, height) {
  this.canvas = canvas;
  this.width = width*PIXEL_WIDTH;
  this.height = height*PIXEL_WIDTH;
  this.canvas.setAttribute('width', width*PIXEL_WIDTH + 'px');
  this.canvas.setAttribute('height', height*PIXEL_WIDTH + 'px');
  document.body.appendChild(this.canvas);

  this.ctx = canvas.getContext('2d');
  this.dot = new Pixel();
}

Board.prototype.getWidth = function() {
  return this.width/PIXEL_WIDTH;
}

Board.prototype.getHeight = function() {
  return this.height/PIXEL_WIDTH;
}

Board.prototype.drawPixel = function(p) {
  this.ctx.fillStyle = "blue";
  console.log("**drawing a pixel!");
  this.ctx.fillRect(p.x*p.width, p.y*p.width, p.width, p.width);
  return p;
}

Board.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.width, this.height);
}

Board.prototype.redraw = function(snake, food) {
  this.clear();

  var p = snake.getTailLocation().neighbor(oppositeDirection(snake.getTail().getDirection()));

  console.log("**limbs: ", snake.getLimbs());
  snake.getLimbs().map(function(limb) {
    var numPixels = limb.length;
    for (var i = 0; i < numPixels; i++) {
      p = this.drawPixel(p.neighbor(limb.direction));
    }
  }, this);

  this.drawPixel(food);
}

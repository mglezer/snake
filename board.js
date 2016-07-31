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

  snake.getLimbs().map(function(limb) {
      this.drawPixel(limb);
  }, this);

  this.drawPixel(food);
}

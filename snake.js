

function Snake(startPosition) {
  this.tailLocation = startPosition;
  this.headLocation = startPosition;
  this.limbs = [ new SnakeLimb(defaultDirection) ];
}

Snake.prototype.getTail = function() {
  return this.limbs[0];
}

Snake.prototype.getHeadLocation = function() {
  return this.headLocation;
}

Snake.prototype.getNextPixel = function(newDirection) {
  return this.getHeadLocation().neighbor(newDirection);
}

Snake.prototype.getLimbs = function() {
  return this.limbs;
}

Snake.prototype.getHead = function() {
  return this.limbs[this.limbs.length - 1];
}

Snake.prototype.getCurrentDirection = function() {
  return this.getHead().getDirection();
}

Snake.prototype.getTailLocation = function() {
  return this.tailLocation;
}

Snake.prototype.move = function(newDirection, isGrowing) {
  var currentDirection = this.getCurrentDirection();

  if (currentDirection !== newDirection) {
    this.limbs.push(new SnakeLimb(newDirection));
  } else {
    this.getHead().advance();
  }

  if (!isGrowing) {
    if (this.getTail().getLength() === 1) {
      this.limbs.shift();
    } else {
      this.getTail().length -= 1;
    }
  }

  this.headLocation = this.headLocation.neighbor(newDirection)
  this.tailLocation = this.tailLocation.neighbor(this.getTail().getDirection())
}

function SnakeLimb(direction) {
  this.direction = direction;
  this.length = 1;
}

SnakeLimb.prototype.getDirection = function() {
  return this.direction;
}

SnakeLimb.prototype.getLength = function() {
  return this.length;
}

SnakeLimb.prototype.advance = function() {
  return this.length += 1;
}

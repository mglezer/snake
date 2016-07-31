var lastDirection = defaultDirection;

var game;
window.onload = function() {
    game = new Game(20, 30);
    var interval = window.setInterval(function() {
      var isDead = game.update(lastDirection);

      if (isDead) {
        console.error("**ending game!!");
        window.clearInterval(interval);
      }
    }, 100);

    // window.setTimeout(function() {
    //   window.clearInterval(interval);
    // }, 5000);
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode == 37) {
        console.log('Left was pressed');
        lastDirection = directions.LEFT;
    }

    else if(event.keyCode == 38) {
        console.log('Up was pressed');
        lastDirection = directions.UP;
    }

    else if(event.keyCode == 39) {
        console.log('Right was pressed');
        lastDirection = directions.RIGHT;
    }

    else if(event.keyCode == 40) {
        console.log('Down was pressed');
        lastDirection = directions.DOWN;
    }
});

var canvas = document.getElementById("ok");
var ctx = canvas.getContext("2d");
var loggingMachine = document.getElementById("loggy");
var score = 0;
var endGame = true;

const Rg = Math.floor(Math.random() * 480);
function ball(x) {
  this.x = x;
  this.y = 0;
  this.width = 20;
  this.height = 20;
}
var firstBall = new ball(Rg);
var staticName = "placeholder";
function generateNext(num) {
  staticName = "ball" + num;
}
function newBall() {
  if (firstBall.y < 480) {
    ctx.clearRect(0, 0, 480, 480);
    ctx.fillRect(firstBall.x, firstBall.y, firstBall.width, firstBall.height);
    firstBall.y++;
  } else {
    const playerStart = player.x;
    const playerEnd = player.x + player.width;

    const ballStart = firstBall.x;
    const ballEnd = firstBall.x + firstBall.width;

    const test1 = ballEnd - playerStart;
    const test2 = ballStart - playerEnd;

    if (test1 >= 0 && test2 <= 0) {
      score++;
      generateNext(3);
      window[staticName] = new ball(Rg)
      if (score % 10 === 0 && score > 0) {
        alert("your score is " + score);
      }
    } else {
      score = 0;
    }
    firstBall.y = 0;
    firstBall.x = Math.floor(Math.random() * 480);
  }
}
function paddle(x) {
  this.x = x;
  this.y = 470;
  this.width = 70;
  this.height = 20;
}

var player = new paddle(50);
function renderPlayer() {
  ctx.fillRect(player.x, player.y, player.width, player.height);
}
function tick() {
	if(!endGame) {
		newBall(Rg);
  		loggingMachine.innerText = score;
  		renderPlayer();
  		setTimeout(tick, 5);
	}
	else {
		ctx.fillStyle = "red";
		ctx.font = "20px Helvetica";
		ctx.textAlign = "center";
		ctx.fillText("PRESS SPACE TO PLAY", 240, 240);
	}
}
loggingMachine.innerText = score;

document.addEventListener("keydown", (e) => {
  if (e.code === "ArrowLeft") {
    if (player.x > 0) {
      player.x = player.x - 10;
    }
  } else if (e.code === "ArrowRight") {
    if (player.x + player.width < 480) {
      player.x = player.x + 10;
    }
  }
  else if (e.code === "Space") {
  	if(endGame) {
  		endGame = false;
  		tick();
  	}
  	else endGame = true;
  }
});

tick();
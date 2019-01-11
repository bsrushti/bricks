const ARROW_RIGHT = "ArrowRight";
const ARROW_LEFT = "ArrowLeft";

const addPixel = count => count + "px";

const drawPaddle = function(paddleDiv, paddle) {
  paddleDiv.style.width = addPixel(paddle.width);
  paddleDiv.style.height = addPixel(paddle.height);
  paddleDiv.style.left = addPixel(paddle.left);
  paddleDiv.style.bottom = addPixel(paddle.bottom);
};

const movePaddle = function(paddle, event) {
  let paddleDiv = document.getElementById("paddle_1");
  if (event.key == ARROW_RIGHT) paddle.moveRight();
  if (event.key == ARROW_LEFT) paddle.moveLeft();
  drawPaddle(paddleDiv, paddle);
};

const initializePaddle = function(document) {
  let paddle = new Paddle(100, 20, 400, 5);
  let screen = document.getElementById("screen");
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  screen.focus();
  screen.onkeydown = movePaddle.bind(null, paddle);
  drawPaddle(paddleDiv, paddle);
  screen.appendChild(paddleDiv);
};

const startGame = function() {
  initializePaddle(document);
};

window.onload = startGame;

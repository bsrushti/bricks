const ARROW_RIGHT = "ArrowRight";
const ARROW_LEFT = "ArrowLeft";

const addPixel = count => count + "px";

const drawPaddle = function(paddleDiv, paddle) {
  paddleDiv.style.width = addPixel(paddle.width);
  paddleDiv.style.height = addPixel(paddle.height);
  paddleDiv.style.left = addPixel(paddle.left);
  paddleDiv.style.bottom = addPixel(paddle.bottom);
};

const drawScreen = function(mainScreen, screen) {
  mainScreen.style.width = addPixel(screen.width);
  mainScreen.style.height = addPixel(screen.height);
};

const movePaddle = function(paddle, event) {
  let paddleDiv = document.getElementById("paddle_1");
  if (event.key == ARROW_RIGHT) paddle.moveRight(800);
  if (event.key == ARROW_LEFT) paddle.moveLeft(0);
  drawPaddle(paddleDiv, paddle);
};

const initializePaddle = function(document, paddle) {
  let paddleDiv = document.createElement("div");
  paddleDiv.id = "paddle_1";
  paddleDiv.className = "paddle";
  drawPaddle(paddleDiv, paddle);
  return paddleDiv;
};

const initializeScreen = function(document, screen) {
  let mainScreen = document.createElement("main");
  mainScreen.id = "screen";
  mainScreen.setAttribute("tabindex", "0");
  drawScreen(mainScreen, screen);
  return mainScreen;
};

const initialize = function(document) {
  let paddle = new Paddle(100, 20, 400, 5);
  let screen = new Screen(750, 900);
  let paddleDiv = initializePaddle(document, paddle);
  let mainScreen = initializeScreen(document, screen);
  let gameBody = document.getElementById("gameBody");
  gameBody.appendChild(mainScreen);
  mainScreen.focus();
  mainScreen.onkeydown = movePaddle.bind(null, paddle);
  mainScreen.appendChild(paddleDiv);
};

const startGame = function() {
  initialize(document);
};

window.onload = startGame;

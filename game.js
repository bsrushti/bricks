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

const drawBall = function(ballDiv, ball) {
  ballDiv.style.borderRadius = addPixel(ball.radius);
  ballDiv.style.bottom = addPixel(ball.bottom);
  ballDiv.style.left = addPixel(ball.left);
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

const initializeBall = function(document, ball) {
  let ballDiv = document.createElement("div");
  ballDiv.id = "ball_1";
  ballDiv.className = "ball";
  drawBall(ballDiv, ball);
  return ballDiv;
};

const drawBrick = function(brickDiv, brick) {
  brickDiv.style.width = addPixel(brick.width);
  brickDiv.style.height = addPixel(brick.height);
  brickDiv.style.left = addPixel(brick.left);
  brickDiv.style.top = addPixel(brick.top);
};

const initializeBrick = function(document, brick) {
  let brickDiv = document.createElement("div");
  brickDiv.id = "brick";
  brickDiv.className = "brick";
  drawBrick(brickDiv, brick);
  return brickDiv;
};

const initialize = function(document) {
  let paddle = new Paddle(100, 20, 400, 5);
  let screen = new Screen(750, 900);
  let ball = new Ball(50, 25, 425);
  let paddleDiv = initializePaddle(document, paddle);
  let ballDiv = initializeBall(document, ball);
  let mainScreen = initializeScreen(document, screen);
  let gameBody = document.getElementById("gameBody");
  gameBody.appendChild(mainScreen);
  mainScreen.focus();
  mainScreen.onkeydown = movePaddle.bind(null, paddle);
  let bricks = createWall(document);
  mainScreen.appendChild(bricks);
  mainScreen.appendChild(paddleDiv);
  mainScreen.appendChild(ballDiv);
  moveBall(mainScreen, ballDiv, ball, paddle);
};

const startGame = function() {
  initialize(document);
};

window.onload = startGame;

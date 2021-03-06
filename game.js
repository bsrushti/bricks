const game = function(screen, ballDiv, ball, paddle) {
  let verticalWall = new VerticalWall(840, 0);
  let horizontalWall = new HorizontalWall(690, 0);
  setInterval(() => {
    horizontalWall.changeVelocityOf(ball);
    verticalWall.changeVelocityOf(ball);
    ball.move();
    paddle.changeVelocityOf(ball);
    drawBall(ballDiv, ball);
    screen.appendChild(ballDiv);
  }, 5);
};

class Ball {
  constructor(radius, bottom, left, velocity) {
    this.radius = radius;
    this.bottom = bottom;
    this.left = left;
    this.velocity = velocity;
    this.dx = 1;
    this.dy = 1;
  }

  move() {
    this.left += this.velocity.dx;
    this.bottom += this.velocity.dy;
  }
}

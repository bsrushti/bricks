class Brick {
  constructor(height, width, top, left) {
    this.height = height;
    this.width = width;
    this.top = top;
    this.left = left;
  }
}

const getBrick = function(top, left, isCollide) {
  return { top, left, isCollide };
};

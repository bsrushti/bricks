class Brick {
  constructor(height, width, top, left) {
    this.height = height;
    this.width = width;
    this.top = top;
    this.left = left;
  }
}

const createWall = function(document) {
  let wall = document.createElement("div");
  let top = 0;
  let left = 0;
  for (let row = 0; row <= 3; row++) {
    for (let column = 0; column <= 9; column++) {
      let brick = new Brick(30, 70, top, left);
      brick = initializeBrick(document, brick);
      wall.appendChild(brick);
      left += 90;
    }
    top += 55;
    left = 0;
  }
  return wall;
};

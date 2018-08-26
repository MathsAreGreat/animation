let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let balls = [];
let x, y, r, distance = 100,
  rmax = 100,
  p = 1;
let mouse = {
  x: null,
  y: null
};
let colors = [
  "#B21212",
  "#FFFC19",
  "#FF0000",
  "#1485CC",
  "#1485CC"
];

for (var i = 0; i < 600; i++) {
  r = Math.random() * 3 + 4;
  x = Math.random() * (innerWidth - 2 * r) + r;
  dx = (Math.random() * p + p) * Math.pow(-1, Math.floor(Math.random() * p + p));
  dy = (Math.random() * p + p) * Math.pow(-1, Math.floor(Math.random() * p + p));
  y = Math.random() * (innerHeight - 2 * r) + r;
  balls.push(new Ball(x, y, dx, dy, r));
}
let initialize = () => {
  balls = [];
  for (var i = 0; i < 300; i++) {
    r = Math.random() * 3 + 4;
    x = Math.random() * (innerWidth - 2 * r) + r;
    dx = (Math.random() * p + p) * Math.pow(-1, Math.floor(Math.random() * p + p));
    dy = (Math.random() * p + p) * Math.pow(-1, Math.floor(Math.random() * p + p));
    y = Math.random() * (innerHeight - 2 * r) + r;
    balls.push(new Ball(x, y, dx, dy, r));
  }
}
let moveit = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  for (ball of balls) {
    ball.bounce();
    if (ball.x - mouse.x < distance && ball.x - mouse.x > -distance && ball.y - mouse.y > -distance && ball.y - mouse.y < distance) {
      if (ball.r < rmax) ball.r += 2;
    } else {
      if (ball.r > ball.rmin) ball.r--;
    }
  }
  requestAnimationFrame(moveit);
}
let callbacks = (event) => {
  mouse.y = event.y;
  mouse.x = event.x;
}
window.addEventListener("mousemove", callbacks);
window.addEventListener("resize", function() {
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  initialize();
});

moveit();
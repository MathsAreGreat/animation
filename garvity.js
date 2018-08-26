let canvas = document.getElementById("myCanvas");
let c = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
let balls = [];
let x, y, r;
let gravity = 1;
let friction = 0.9;
r = 50;
x = Math.random() * (innerWidth - 2 * r) + r;
y = Math.random() * innerHeight / 2;
let ball = new Ball(x, y, 5, 5, r);

for (var i = 0; i < 20; i++) {
  r = 20;
  x = Math.random() * (innerWidth - 2 * r) + r;
  y = Math.random() * (innerHeight - r);
  balls.push(new Ball(x, y, 2, 2, r));
}
let force = () => {
  c.clearRect(0, 0, canvas.width, canvas.height);
  ball.gravite();
  // console.log(ball.x + " x " + ball.y);
  requestAnimationFrame(force);
  // setTimeout(force, 50);
}
force();
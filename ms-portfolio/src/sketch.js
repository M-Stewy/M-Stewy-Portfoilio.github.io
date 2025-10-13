
export function mySketch(p5){
p5.setup = () => {
  createCanvas(400, 400);
};

p5.draw = () => {
  background(220);
  fill(255,0,0);
  rect(50,50,50,50);
};
}


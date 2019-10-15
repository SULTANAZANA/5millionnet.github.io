
let angle = 1;
let fr = 30; 
let joke;
let img;

//img = loadImage(cube.jpeg);



function setup() {
   createCanvas(1920,1080, WEBGL);
   frameRate(fr); 
    
}
  

  function draw()
{
  background(0);
  

  joke = createGraphics(300, 300);
  joke.background(255, 30);
  joke.fill(255);
  joke.textAlign(CENTER);
  joke.textSize(30);
  joke.text('money is not a joke', 150, 50);

  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;

  ambientLight(60, 60, 60);
  pointLight(255, 255, 255, locX, locY, 100);
  

  rotateX(angle*0.02);
  rotateY(angle*0.03);
  rotateZ(angle*0.04);
  angle = angle + 0.09;
  texture(joke);
  plane(300);

  
  translate(-width / 8, -height / 8, 10);
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);
  fill(250, 100, 0);
  //texture(joke);
  torus(150, 40, 64, 64);
  texture(joke);
  torus(150, 40, 64, 64);


  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  fill(255,215,0);
  //texture(joke);
  torus(150, 40, 64, 64);
  texture(joke);
  torus(150, 40, 64, 64);
  




}

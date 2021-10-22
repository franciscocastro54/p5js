// function setup(){
//   createCanvas(400,400,WEBGL)
//   angleMode(DEGREES)
// }

// function draw(){
//   background(30)

//   rotateX(60)

//   noFill()
//   stroke(255)

//   for (var i = 0; i < 20; i++) {
    
//     var r = map(sin(frameCount / 2), -1, 1, 100, 200)
//     var g = map(i, 0, 20, 100, 200)
//     var b = map(cos(frameCount / 2), -1, 1, 100, 200)

//     stroke(r,g,b)

//     beginShape()
//       for (var j = 0; j < 360; j += 10) {
//           var rad = i*8
//           var x = rad * cos(j)
//           var y = rad * sin(j)
//           var x = sin(frameCount * 2 + i * 10 ) * 50

//           vertex(x,y,z)
          
//       }
//       endShape(CLOSE)
      
//   }

// }

/* function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);

  translate(-240, -100, 0);
  normalMaterial();
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  plane(70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(70, 70, 70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cylinder(70, 70);
  pop();

  translate(-240 * 2, 200, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  cone(70, 70);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(70, 20);
  pop();

  translate(240, 0, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  sphere(70);
  pop();
} */

function setup() {
  createCanvas(710, 400, WEBGL);
}

function draw() {
  background(250);
  rotateY(frameCount * 0.05);

  for (let j = 0; j < 6; j++) {
    push();
    for (let i = 0; i < 6; i++) {
      translate(
        sin(frameCount * 0.01 + j) * 50,
        sin(frameCount * 0.01 + j) * 50,
        i * 0.5
      );
      rotateZ(frameCount * 0.005);
      push();
      sphere(20, 10, 10);
      pop();
    }
    pop();
  }
}

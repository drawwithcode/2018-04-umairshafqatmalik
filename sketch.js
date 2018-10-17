

var C1_x = 75;
var C1_inc = 2;

var C2_x = 590;
var C2_inc = 2;


var drops = [];


function setup() {
  createCanvas(800, windowHeight);


  for (var i=0; i<300; i++) {
  var  myDrop = new drop(random(0,width), random(60,200), random(1,2), random(5,13));

    drops.push(myDrop);

}

}

function draw() {
	//Sky color
	background(30);

for (var j=0; j<drops.length; j++) {
  drops[j].display();
  drops[j].move();
}

//clouds
noStroke();
fill(174, 182, 191);

//cloud1
ellipse((C1_x),60,150,70);
ellipse((50+C1_x),35,150,70);
ellipse((70+C1_x),75,150,70);
ellipse((100+C1_x),60,150,70);


//cloud2
ellipse((C2_x),75,200,60);
ellipse((50+C2_x),40,200,75);
ellipse((110+C2_x),70,200,70);




if (C1_x>width+130) {
  C1_x = -175;
  C1_inc = 2;
}

if (C2_x>width+100) {
  C2_x = -210;
  C2_inc = 2;
}

C1_x = C1_x + C1_inc;
C2_x = C2_x + C2_inc;

}



//rain
 function drop (_x, _y, _width, _height) {

   this.x = _x;
   this.y = _y;
   this.width = _width;
   this.height = _height;
   this.speed_y = random (3,8);
   this.gravity = 1.05;
   this.speed_x = 1;

   this.display = function () {
     fill(197, 226, 247);
     noStroke();
     ellipse (this.x, this.y, this.width, this.height);
   }

    this.move = function() {
      this.y += this.speed_y*this.gravity;
      // this.x += this.speed_x;
      if (this.y > height) {
        this.y = _y;
      }
      // if (this.x > width+125) {
      //   this.x = _x;
      // }
    }


 }

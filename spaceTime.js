// safe code:
(function(global, library){

var spaceTime = function(container){

// if container is global object
if (typeof container === "object"){
  var cHeight = container.innerHeight;
  var cWidth = container.innerWidth;
}
// if container is a div box
else {
  var cHeight = container.style.height;
  var cWidth = container.style.width;
}
console.log("container is an "+typeof container);

// return unique instance each time sT is called
return new spaceTime.init(cHeight, cWidth);


}

// function constructor
spaceTime.init = function(height, width) {
  this.height = height;
  this.width = width;
}



// methods: override the default prototype property
spaceTime.prototype = {

checkDimensions: function() {
  console.log(this.height + this.width);
  console.log(this);
  return this;
},

sequence: function(divide) {

  // refers to constructed object.
  var self = this;
  var box = this.setCanvas();

  document.body.appendChild(box);

  // nest this in a requestAnimationFrame and pass
  // the grow function to warp radius
  var i = 0;

  // animate, stop frame approach
  function beam(){
     self.eraze(box);

     // recursion? a function calling itself: 60 calls/frames per second?
     window.requestAnimationFrame(beam);

     i++;

     var grow = self.expand(i);
     self.drawCircle(box, grow);
  }

  beam(); // starts the recursive cycle.

  return this;
},

// expands each unique instance.
expand: function(n) {
  var i = 0;
  i += n * n; // tampar with this algorithm
  console.log(i);
  return i;
},

getCentre: function(axis) {
  // width axis
  if(axis === "x"){
    return this.width / 2;
  }
  // height axis
  else if(axis === "y"){
    return this.height / 2;
  }
  // if undefined or the string doesn't match
  else{
    throw "please input an x or y axis to be proccessed";
  }
},

// canvas context object and it's api methods
drawCircle: function(c, radius) {

   var ctx = c.getContext("2d");

   var x = this.getCentre("x");
   var y = this.getCentre("y");

   // define the arc path
   ctx.beginPath();
   ctx.arc(x, y, radius + radius, 0, 2 * Math.PI, false);
   ctx.fillStyle = '#FF66CC';
  // ctx.fill();

   // stroke it
   ctx.StrokeStyle = "#FF66CC";
   ctx.stroke();

   console.log(ctx);


},

eraze: function(c){
  var ctx = c.getContext("2d");
  ctx.clearRect(0, 0, this.width, this.height);
},

// set up the canvas element
setCanvas: function() {
 var c = document.createElement("canvas");
 // canvas height and width properties don't need px on the end?
 c.height = this.height;
 c.width = this.width;

 console.log("new canvas element created");

 return c;
}

}



// override the prototype object with our own one.
spaceTime.init.prototype = spaceTime.prototype;


// reference and expose library to be invoked.
global.sT = spaceTime;


}(window));

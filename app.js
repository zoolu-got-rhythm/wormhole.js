// call a new sequence/instance every couple secs. which then expands off the screen.
//sT(this).checkDimensions();

// instance 1 of wormhole library
var inst1 = sT(this);

// method chaining


function beam(){
  this.setInterval(beam, 1000); // should this be at the end of the func? recursion
  inst1.checkDimensions().sequence();
}

beam();

// branch, new feature implementation. 

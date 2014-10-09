function Car(make, model, year, color){
  this.make = make; 
  this.model = model; 
  this.year = year; 
  this.color = color; 
// var Car1 = new Car (Toyota, Camry, 2005, blue)
}

Car.prototype.previousOwners = []; 
Car.prototype.currentOwner  = "manufacturer"; 
Car.prototype.state = "off"; 

Car.prototype.sale = function(newOwner) {
  this.previousOwners.push(this.currentOwner); 
  this.currentOwner = newOwner;  
};

Car.prototype.paint = function(newColor){
  this.color = newColor; 
}; 
//* `Car#paint`, which should take a new color and update the color of the car to be new color.

// * `Car#start` should change the state of the car to `on`.
Car.prototype.start = function(){
  this.state = "on"; 
}; 

// * `Car#off` should change the state to `off`.
Car.prototype.off = function() {
  this.state = "off"; 
}; 
// * `Car#driveTo`, it should `console.log` `"driving to <destination>"`
//but only if the car `state` is `on`. *Note: this method needs to 
//take a `destination` param.*
Car.prototype.driveTo = function(destination) {
  if (this.state === "on") {
    console.log("driving to " + destination); 
  }
};

// * `Car#park` only if the car is `off` and if it's off console.log `parked!!`.
Car.prototype.park = function() {
  if (this.state === "off") {
    var myCarState = "parked!"; 
    console.log(myCarState); 
    return myCarState; 
  }
}; 

// * `Car#pick_up` should take a `name` and `console.log` that you are 
// `"driving to 'pick up <friend>'"`, but only if the `car` is `on`. 
// It should also update the `passangers` array to include the new passanger.
Car.prototype.passengers = []; 
Car.prototype.pickUp = function(name) {
  if (this.state === "on") {
  console.log("driving to pick up " + name); 
  this.passengers.push(name);
  } 
};

// * `Car#dropOff` it should take a `name` and remove them from 
// the `passengers` array, but only if they are in the array. 
// It should also only drop them off if the car is `on`.
Car.prototype.dropOff = function(name) {
  if(this.state === "on" && this.passengers.indexOf(name) !== -1) {
    console.log("dropping off " + name); 
    this.passengers.splice(this.passengers.indexOf(name, 1)); 
  }
}; 

module.exports=Car;
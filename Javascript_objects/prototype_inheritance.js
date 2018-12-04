// Multiple inheritance in action
function Vehicle(canMove) {
    this.canMove = canMove;
    this.functionName = function () {
        console.log("This is Vehicle");
    }
}

function Car(noOfWheels) {
    this.Wheels = noOfWheels;
    Vehicle.call(this, true);
}

Car.prototype = Object.create(Vehicle.prototype);
var sampleCar = new Car(4);
sampleCar.functionName();


// function Merc() {
//     this.isLuxuryCar = true;
// }

// function MercG63() {
//     this.myFavourite = true;
// }
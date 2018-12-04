//function-object
// class
function Dog(name, age, location) {
    this.Name = name;
    this.Age = age;
    this.Location = location;

    this.bark = function () {
        console.log('woofu woofu');
    }
}
console.log("Dog prototype before creating instance");
console.log(Dog.prototype);
let d1 = new Dog("Effy", "12", "Secundera");
console.log("Dog Prototype");
console.log(Dog.prototype);
console.log("d1.__proto__")
console.log(d1.__proto__);    // References the prototype of Dog
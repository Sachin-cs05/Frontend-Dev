function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(`Car Brand: ${this.brand}, Model: ${this.model}`);
};

const car1 = new Car("Toyota", "Camry");
const car2 = new Car("Honda", "Civic");

console.log("Car 1 Details:");
car1.getDetails();

console.log("Car 2 Details:");
car2.getDetails();

console.log("\nBoth objects share the same method via prototype:");
console.log("car1.getDetails === car2.getDetails:", car1.getDetails === car2.getDetails);
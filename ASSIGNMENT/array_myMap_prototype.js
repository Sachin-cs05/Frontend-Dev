Array.prototype.myMap = function(callback) {
    const result = [];
    
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    
    return result;
};

const numbers = [1, 2, 3];
const doubled = numbers.myMap(num => num * 2);
const squared = numbers.myMap(num => num * num);

console.log("Original array:", numbers);
console.log("Doubled using myMap:", doubled);
console.log("Squared using myMap:", squared);

console.log("Doubled using built-in map:", numbers.map(num => num * 2));

const fruits = ["apple", "banana", "orange"];
const uppercased = fruits.myMap(fruit => fruit.toUpperCase());
console.log("Uppercased fruits:", uppercased);
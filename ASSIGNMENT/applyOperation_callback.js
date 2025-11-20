function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

const double = (num) => num * 2;
const square = (num) => num * num;

const numbers = [1, 2, 3, 4];

console.log("Original array:", numbers);
console.log("Doubled:", applyOperation(numbers, double));
console.log("Squared:", applyOperation(numbers, square));
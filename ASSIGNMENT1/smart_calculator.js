const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;
        case "subtract":
            return a - b;
        case "multiply":
            return a * b;
        case "divide":
            if (b === 0) {
                throw new Error("Division by zero is not allowed");
            }
            return a / b;
        case "power":
            return Math.pow(a, b);
        case "root":
            if (a < 0) {
                throw new Error("Cannot calculate square root of negative number");
            }
            return Math.sqrt(a);
        default:
            throw new InvalidOperationError(`Unsupported operation: ${operation}`);
    }
}

console.log("Processing operations:");
operations.forEach(operation => {
    try {
        let result;
        if (operation === "root") {
            result = calculate(operation, num1);
            console.log(`${operation}(${num1}) = ${result}`);
        } else {
            result = calculate(operation, num1, num2);
            console.log(`${operation}(${num1}, ${num2}) = ${result}`);
        }
    } catch (error) {
        if (error instanceof InvalidOperationError) {
            console.log(`Invalid Operation: ${error.message}`);
        } else {
            console.log(`Error in ${operation}: ${error.message}`);
        }
    }
});

try {
    const result = calculate("modulo", num1, num2);
    console.log(`modulo(${num1}, ${num2}) = ${result}`);
} catch (error) {
    console.log(`Error: ${error.message}`);
}
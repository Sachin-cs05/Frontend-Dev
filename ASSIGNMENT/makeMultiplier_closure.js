function makeMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);
const multiplyByFive = makeMultiplier(5);

console.log("Triple of 5:", triple(5));
console.log("Double of 7:", double(7));
console.log("Multiply 4 by 5:", multiplyByFive(4));

console.log("\nClosure Explanation:");
console.log("1. When makeMultiplier is called, it creates a new execution context.");
console.log("2. The multiplier parameter is stored in that execution context.");
console.log("3. The inner function returned has access to the multiplier variable.");
console.log("4. Even after makeMultiplier finishes executing, the inner function");
console.log("   retains access to the multiplier through closure.");
console.log("5. Each call to makeMultiplier creates a separate closure with its own multiplier.");
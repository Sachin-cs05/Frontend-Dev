const str = "45.67";
const num = parseFloat(str);

console.log("Original string:", str);
console.log("Parsed number:", num);
console.log("Is valid number:", !isNaN(num));

console.log("\nChecking invalid string:");
const invalidStr = "hello";
const invalidNum = parseFloat(invalidStr);
console.log("Original string:", invalidStr);
console.log("Parsed number:", invalidNum);
console.log("Is valid number:", !isNaN(invalidNum));
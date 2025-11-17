console.log("5 == \"5\":", 5 == "5");     
console.log("5 === \"5\":", 5 === "5");  

console.log("\nExplanation:");
console.log("== (loose equality) compares values after type conversion");
console.log("The string \"5\" is converted to number 5, so 5 == 5 is true");

console.log("\n=== (strict equality) compares both value and type");
console.log("5 is a number, \"5\" is a string, so they are not strictly equal");
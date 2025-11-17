function showMessage() {
    var greeting = "Welcome";
    console.log(greeting);
}

showMessage();

console.log("\nExplanation:");
console.log("1. The original code threw an error because 'greeting' was not declared.");
console.log("2. Under strict mode, JavaScript prevents accidental global variable creation.");
console.log("3. By adding 'var', 'let', or 'const', we properly declare the variable in the function scope.");
console.log("4. Scope declaration rules in strict mode enforce cleaner, more predictable code.");
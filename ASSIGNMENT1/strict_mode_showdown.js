console.log("Without strict mode:");
try {
    function demoLoose(a, a) {
        total = 10;
        console.log("Value of 'a':", a);
        console.log("Value of 'total':", total);
        
        console.log("After attempting to delete total");
    }
    
    demoLoose(5, 10);
} catch (error) {
    console.log("Error in loose mode:", error.message);
}
try {
    function demoStrict(a, a) {
        total = 10;
        console.log("Value of 'a':", a);
        console.log("Value of 'total':", total);
        
        console.log("After attempting to delete total");
    }
    
    demoStrict(5, 10);
} catch (error) {
    console.log("Error in strict mode:", error.message);
}

console.log("\nCorrected ES6 version:");
function demoCorrect(first, second) {
    let total = 10;
    console.log("Value of 'first':", first);
    console.log("Value of 'second':", second);
    console.log("Value of 'total':", total);
    
    total = undefined;
    console.log("After setting total to undefined:", total);
}

demoCorrect(5, 10);

console.log("\nExplanation:");
console.log("1. Strict mode prevents duplicate parameter names in function definitions");
console.log("2. Strict mode prevents implicit global variable creation");
console.log("3. Strict mode prevents deletion of variables");
console.log("4. Strict mode makes code more secure and helps catch common errors");
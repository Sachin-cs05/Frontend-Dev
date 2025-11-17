function generatePyramid(rows = 5) {
    console.log(`Generating pyramid with ${rows} rows:`);
    
    for (let i = 1; i <= rows; i++) {
        let pattern = "";
        for (let j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
}

generatePyramid();

console.log("\nWith var instead of let:");
function generatePyramidWithVar(rows = 5) {
    console.log(`Generating pyramid with ${rows} rows:`);
    
    for (var i = 1; i <= rows; i++) {
        var pattern = "";
        for (var j = 1; j <= i; j++) {
            pattern += "* ";
        }
        console.log(pattern);
    }
    
    console.log(`Final values - i: ${i}, j: ${j}`);
}

generatePyramidWithVar(3);

console.log("\nExplanation:");
console.log("- With 'let', variables are block-scoped and not accessible outside their block");
console.log("- With 'var', variables are function-scoped and can leak outside their intended scope");
console.log("- In strict mode, undeclared variables would cause errors");
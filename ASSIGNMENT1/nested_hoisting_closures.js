console.log("Original code behavior:");

function outer() {
    console.log(count);
    var count = 5;
    
    function inner() {
        console.log(count);
        var count = 10;
    }
    inner();
}

outer();

console.log("\nExplanation of Hoisting:");
console.log("1. Variable declarations (var) are hoisted to the top of their scope");
console.log("2. During hoisting, variables are initialized with 'undefined'");
console.log("3. Each function has its own scope, so hoisting occurs separately in each");
console.log("4. The assignment (=) is not hoisted, only the declaration");

console.log("\nFixed version:");

function fixedOuter() {
    var count = 5;
    console.log("Outer count:", count);
    
    function fixedInner() {
        var count = 10;
        console.log("Inner count:", count);
    }
    fixedInner();
    
    console.log("Outer count after inner:", count);
}

fixedOuter();

console.log("\nArrow function version:");

function arrowOuter() {
    var count = 5;
    console.log("Outer count:", count);
    
    const arrowInner = () => {
        var count = 10;
        console.log("Arrow inner count:", count);
    };
    
    arrowInner();
    console.log("Outer count after arrow inner:", count);
}

arrowOuter();

console.log("\nClosure demonstration:");

function closureOuter() {
    var count = 5;
    
    function innerWithClosure() {
        console.log("Count in closure:", count);
    }
    
    function innerModifyClosure() {
        count = 10;
        console.log("Modified count in closure:", count);
    }
    
    console.log("Initial count:", count);
    innerWithClosure();
    innerModifyClosure();
    console.log("Final count:", count);
    
    return innerWithClosure;
}

const closureFunc = closureOuter();
closureFunc();

console.log("\nCall Stack Explanation:");
console.log("1. Global execution context is created");
console.log("2. outer() is called, creating a new execution context");
console.log("3. inner() is called, creating another execution context");
console.log("4. Execution completes and contexts are popped off the stack");
console.log("5. With closures, scope chains are maintained even after execution");
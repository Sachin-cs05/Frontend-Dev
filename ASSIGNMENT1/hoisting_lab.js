console.log("Original code behavior:");

try {
    console.log(score);
} catch (e) {
    console.log("ReferenceError caught:", e.message);
}

announce();

var score = 50;

function announce() { 
    console.log("Game started"); 
}

try {
    console.log(status);
} catch (e) {
    console.log("ReferenceError for 'status':", e.message);
}

let status = "ready";

try {
    startGame();
} catch (e) {
    console.log("ReferenceError in startGame:", e.message);
}

function startGame() {
    console.log(status);
}

console.log("\nFixed version:");
function fixedHoistingDemo() {
    var fixedScore = 50;
    console.log(fixedScore);
    
    function fixedAnnounce() { 
        console.log("Game started"); 
    }
    fixedAnnounce();
    
    let fixedStatus = "ready";
    console.log(fixedStatus);
    
    function fixedStartGame() {
        console.log(fixedStatus);
    }
    fixedStartGame();
}

fixedHoistingDemo();

console.log("\nArrow function version:");
const arrowAnnounce = () => console.log("Game started");
const arrowStartGame = (status) => console.log(status);

(() => {
    var score = 50;
    console.log(score);
    arrowAnnounce();
    let status = "ready";
    console.log(status);
    arrowStartGame(status);
})();

console.log("\nExplanation:");
console.log("- Variables declared with 'var' are hoisted and initialized with 'undefined'");
console.log("- Function declarations are fully hoisted with their bodies");
console.log("- Variables declared with 'let/const' are hoisted but not initialized (Temporal Dead Zone)");
console.log("- Arrow functions are not hoisted like function declarations");
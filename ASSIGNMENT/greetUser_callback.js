function greetUser(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function showEndMessage() {
    console.log("Welcome to the course!");
}

console.log("Starting the greeting process...");
greetUser("Alice", showEndMessage);
console.log("Process completed.");
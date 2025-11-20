const user = {
    name: "John Doe",
    showName: () => {
        console.log(this.name);
    }
};

console.log("With arrow function:");
user.showName();
console.log("Explanation: Arrow functions do not have their own 'this' context.");
console.log("They inherit 'this' from the enclosing scope, which in this case is the global object.");

const userFixed = {
    name: "John Doe",
    showName: function() {
        console.log(this.name);
    }
};

console.log("\nWith normal function:");
userFixed.showName();
console.log("Explanation: Normal functions have their own 'this' context which refers to the object they belong to.");
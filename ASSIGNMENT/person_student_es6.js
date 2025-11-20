function PersonProto(name) {
    this.name = name;
}

PersonProto.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

function StudentProto(name, branch) {
    PersonProto.call(this, name);
    this.branch = branch;
}

StudentProto.prototype = Object.create(PersonProto.prototype);
StudentProto.prototype.constructor = StudentProto;

StudentProto.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

StudentProto.prototype.printDetails = function() {
    this.printName();
    this.printBranch();
};

class PersonClass {
    constructor(name) {
        this.name = name;
    }
    
    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class StudentClass extends PersonClass {
    constructor(name, branch) {
        super(name);
        this.branch = branch;
    }
    
    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
    
    printDetails() {
        this.printName();
        this.printBranch();
    }
}

console.log("=== Prototype Version ===");
const studentProto = new StudentProto("Alice", "Computer Science");
studentProto.printDetails();

console.log("\n=== ES6 Class Version ===");
const studentClass = new StudentClass("Bob", "Electronics");
studentClass.printDetails();

console.log("\n=== Behavior Comparison ===");
console.log("Both versions:");
console.log("- Create objects with name and branch properties");
console.log("- Inherit methods from parent");
console.log("- Allow calling parent methods from child");
console.log("- Maintain proper prototype chain");

console.log("\nInstanceof checks:");
console.log("studentProto instanceof StudentProto:", studentProto instanceof StudentProto);
console.log("studentProto instanceof PersonProto:", studentProto instanceof PersonProto);
console.log("studentClass instanceof StudentClass:", studentClass instanceof StudentClass);
console.log("studentClass instanceof PersonClass:", studentClass instanceof PersonClass);
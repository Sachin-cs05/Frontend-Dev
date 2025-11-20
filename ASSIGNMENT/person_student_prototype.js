function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.printBranch = function() {
    console.log(`Branch: ${this.branch}`);
};

Student.prototype.printDetails = function() {
    this.printName();
    this.printBranch();
};

const student = new Student("Alice", "Computer Science");

console.log("Student Details:");
student.printDetails();

console.log("\nPrototype Chain Demonstration:");
console.log("student instanceof Student:", student instanceof Student);
console.log("student instanceof Person:", student instanceof Person);
console.log("student.constructor === Student:", student.constructor === Student);
console.log("Student.prototype.constructor === Student:", Student.prototype.constructor === Student);
console.log("Student.prototype instanceof Person:", Student.prototype instanceof Person);
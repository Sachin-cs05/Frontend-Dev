function Person(name) {
    this.name = name;
}

Person.prototype.printName = function() {
    console.log(`Name: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.printDepartment = function() {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.printSubject = function() {
    console.log(`Subject: ${this.subject}`);
};

Professor.prototype.printAllDetails = function() {
    this.printName();
    this.printDepartment();
    this.printSubject();
};

const professor = new Professor("Dr. Smith", "Computer Science", "JavaScript");

console.log("Professor Details:");
professor.printAllDetails();

console.log("\nAccessing individual methods up the prototype chain:");
professor.printName();
professor.printDepartment();
professor.printSubject();

console.log("\nPrototype Chain Verification:");
console.log("professor instanceof Professor:", professor instanceof Professor);
console.log("professor instanceof Faculty:", professor instanceof Faculty);
console.log("professor instanceof Person:", professor instanceof Person);
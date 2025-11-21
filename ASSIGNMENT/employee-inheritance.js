class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is working in ${this.department}`;
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    work() {
        return `${this.name} is managing a team of ${this.teamSize} in ${this.department}`;
    }

    conductMeeting() {
        return `${this.name} is conducting a meeting`;
    }
}

const emp = new Employee("John Doe", "IT");
const mgr = new Manager("Jane Smith", "Marketing", 10);

console.log(emp.work());
console.log(mgr.work());
console.log(mgr.conductMeeting());

const staff = [emp, mgr];
staff.forEach(member => {
    console.log(member.work());
});
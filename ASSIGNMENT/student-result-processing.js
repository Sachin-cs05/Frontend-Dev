class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (this.marks.length === 0) return 0;
        const sum = this.marks.reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();
        if (average >= 90) return 'A';
        if (average >= 80) return 'B';
        if (average >= 70) return 'C';
        return 'F';
    }
}

const student1 = new Student("Alice", [95, 87, 92, 88, 90]);
const student2 = new Student("Bob", [78, 82, 75, 80, 77]);
const student3 = new Student("Charlie", [65, 70, 68, 72, 69]);

console.log(`Student: ${student1.name}, Average: ${student1.calculateAverage().toFixed(2)}, Grade: ${student1.getGrade()}`);
console.log(`Student: ${student2.name}, Average: ${student2.calculateAverage().toFixed(2)}, Grade: ${student2.getGrade()}`);
console.log(`Student: ${student3.name}, Average: ${student3.calculateAverage().toFixed(2)}, Grade: ${student3.getGrade()}`);
const marks = [85, 76, 92, 88, 79];

let total = 0;
for (let i = 0; i < marks.length; i++) {
    total += marks[i];
}

const average = total / marks.length;
const percentage = average;

let hasFailSubject = false;
for (let i = 0; i < marks.length; i++) {
    if (marks[i] < 35) {
        hasFailSubject = true;
        break;
    }
}

let result;
if (hasFailSubject) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log(`Marks: [${marks.join(", ")}]`);
console.log(`Average: ${average.toFixed(2)}%`);
console.log(`Result: ${result}`);
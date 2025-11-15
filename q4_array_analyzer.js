let scores = [];
for (let i = 0; i < 8; i++) {
    scores.push(Math.floor(Math.random() * 71) + 30);
}

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let averageScore = scores.reduce((sum, score) => sum + score, 0) / scores.length;

let passedStudents = scores.filter(score => score >= 50).length;

console.log(`Scores: [${scores.join(', ')}]`);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Number of students who passed: ${passedStudents}`);
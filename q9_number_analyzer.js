let numbers = [];
for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

let results = [];
numbers.forEach(number => {
    if (number % 3 === 0 && number % 5 === 0) {
        results.push("FizzBuzz");
    } else if (number % 2 === 0) {
        results.push("Even");
    } else {
        results.push("Odd");
    }
});

console.log("Numbers 1-30 classification:");
console.log(results);
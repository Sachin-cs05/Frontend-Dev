let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;
    
    if (isPermanent) {
        salary += bonus;
    }
    
    console.log(`Total salary: ${salary}`);
    return salary;
}

console.log("For permanent employee:");
calculateSalary(true);

console.log("For temporary employee:");
calculateSalary(false);

console.log(`Global bonus value: ${bonus}`);
const employees = [
    { name: "Amt", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("=== Q2 - Employee Bonus Calculator ===");

employees.forEach(employee => {
    try {
        const salary = Number(employee.salary);
        const years = Number(employee.years);
        
        if (isNaN(salary) || isNaN(years)) {
            throw new Error(`Invalid data for employee ${employee.name}`);
        }
        
        const bonus = years > 3 ? salary * 0.1 : salary * 0.05;
        
        console.log(`Employee: ${employee.name}`);
        console.log(`  Salary: $${salary.toLocaleString()}`);
        console.log(`  Years of Service: ${years}`);
        console.log(`  Bonus: $${bonus.toLocaleString()}`);
        console.log(`  Total Compensation: $${(salary + bonus).toLocaleString()}\n`);
    } catch (error) {
        console.error(`Error processing employee ${employee.name}: ${error.message}`);
    }
});
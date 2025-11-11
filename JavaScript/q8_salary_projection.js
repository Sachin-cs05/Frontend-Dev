const currentSalary = 50000;
const incrementRate = 5; // 5% annual increment

const salaryProjection = [];

for (let year = 1; year <= 5; year++) {
    const salary = currentSalary * Math.pow(1 + incrementRate / 100, year);
    salaryProjection.push({
        Year: year,
        Salary: Math.round(salary)
    });
}

console.table(salaryProjection);
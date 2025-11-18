class Employee {
  constructor(id, name, department, salary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.salary = salary;
  }

  getAnnualSalary() {
    return this.salary * 12;
  }

  applyBonus(percent) {
    this.salary = this.salary + (this.salary * percent / 100);
  }
}

const employees = [
  new Employee(1, "Alice Johnson", "Engineering", 5000),
  new Employee(2, "Bob Smith", "Marketing", 4500),
  new Employee(3, "Carol Williams", "HR", 4000),
  new Employee(4, "David Brown", "Finance", 5500),
  new Employee(5, "Eve Davis", "Engineering", 6000)
];

console.log("Employee Annual Salaries:");
employees.forEach(employee => {
  const annualSalary = employee.getAnnualSalary();
  console.log(`${employee.name}: $${annualSalary.toLocaleString()}`);
});

const totalAnnualPayout = employees.reduce((total, employee) => {
  return total + employee.getAnnualSalary();
}, 0);

console.log(`\nTotal Annual Payout: $${totalAnnualPayout.toLocaleString()}`);
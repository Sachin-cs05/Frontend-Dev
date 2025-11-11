const expenses = [
    { category: "food", amount: 350 },
    { category: "travel", amount: 200 },
    { category: "rent", amount: 1200 },
    { category: "bills", amount: 150 },
    { category: "leisure", amount: 100 }
];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
}

const average = total / expenses.length;

let totalWithTax = total;
totalWithTax += total * 0.10;

console.log("Expense Report:");
console.log("================");
console.log(`Total Expenses: $${total.toFixed(2)}`);
console.log(`Average Expenses: $${average.toFixed(2)}`);
console.log(`Final Amount (with 10% tax): $${totalWithTax.toFixed(2)}`);
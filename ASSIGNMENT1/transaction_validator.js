const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

transactions.forEach((transaction, index) => {
    try {
        if (transaction === null) {
            throw new Error("Null transaction entry");
        }
        
        if (transaction.id === undefined) {
            throw new Error("Missing transaction ID");
        }
        
        if (transaction.amount === undefined) {
            throw new Error("Missing transaction amount");
        }
        
        if (transaction.amount < 0) {
            throw new Error("Negative transaction amount");
        }
        
        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: Valid - $${transaction.amount}`);
    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            error: error.message,
            index: index
        });
        console.log(`Transaction at index ${index}: Invalid - ${error.message}`);
    }
});

console.log(`  Valid Transactions: ${validTransactions.length}`);
console.log(`  Invalid Transactions: ${invalidTransactions.length}`);
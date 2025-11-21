class BankAccount {
    #balance = 0;

    constructor(initialBalance = 0) {
        if (initialBalance < 0) {
            throw new Error("Initial balance cannot be negative");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Deposit amount must be positive");
        }
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
        }
        
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }
        
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

try {
    const account = new BankAccount(100);
    console.log(`Initial Balance: $${account.getBalance()}`);
    
    account.deposit(50);
    console.log(`After Deposit: $${account.getBalance()}`);
    
    account.withdraw(30);
    console.log(`After Withdrawal: $${account.getBalance()}`);
} catch (error) {
    console.error(`Transaction Error: ${error.message}`);
}

try {
    const account2 = new BankAccount();
    account2.deposit(-10);
} catch (error) {
    console.error(`Transaction Error: ${error.message}`);
}
class BankAccount {
    Balance = 0;
    Debit(amount, description) {
        let statement = "Sorry!, Insufficient balance in your account!";
        if (amount > 0) {
            statement = "Invalid amount!";
            if (this.Balance >= amount) {
                this.Balance -= amount;
                statement = `Amount debited successfully! New balance is: ${this.Balance}`;
            }
            else {
                statement = "Sorry!, Insufficient balance in your account!";
            }
        }
        return statement;
    }
    Credit(amount, description) {
        let statement = "Transaction failed!";
        if (amount > 0) {
            this.Balance += amount;
            if (amount > 100) {
                this.Balance -= 1;
            }
            statement = `Amount credited successfully! New balance is: ${this.Balance}`;
        }
        return statement;
    }
}
class Customer {
    FirstName = "";
    LastName = "";
    Gender = "";
    Age = 0;
    Phone = "";
    bankAccount = new BankAccount();
    CustomerInfo() {
        return `Name: ${this.FirstName} ${this.LastName}
        Age: ${this.Age}
        Gender: ${this.Gender}
        Mobile: ${this.Phone}
        Account Balance: ${this.bankAccount.Balance}`;
    }
}
export {};

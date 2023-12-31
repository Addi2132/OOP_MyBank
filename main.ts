interface IBankAccount {
    Debit(decimal: number, d: number): string,
    Credit(decimal: number, d: number): string,
}

class BankAccount implements IBankAccount {
    public Balance: number = 0;

    Debit(amount: number, description: number): string {
        let statement: string = "Sorry!, Insufficient balance in your account!";
        if (amount > 0) {
            statement = "Invalid amount!";

            if (this.Balance >= amount) {
                this.Balance -= amount;
                statement = `Amount debited successfully! New balance is: ${this.Balance}`;
            } else {
                statement = "Sorry!, Insufficient balance in your account!";
            }
        }

        return statement;
    }

    Credit(amount: number, description: number): string {
        let statement: string = "Transaction failed!";
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
    public FirstName: string = "";
    public LastName: string = "";
    public Gender: string = "";
    public Age: number = 0;
    public Phone: string = "";
    public bankAccount = new BankAccount();

    public CustomerInfo(): string {
        return `Name: ${this.FirstName} ${this.LastName}
        Age: ${this.Age}
        Gender: ${this.Gender}
        Mobile: ${this.Phone}
        Account Balance: ${this.bankAccount.Balance}`;
    }
}





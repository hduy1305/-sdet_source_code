import BankAccount from "./BankAccount";

export default class SavingsAccount extends BankAccount{
    constructor(amount: number) {
        super();
        this.accountType = "SavingsAccount";
        this.amount = amount;
    }

    public deposit(depositAmount: number): void{
        this.amount += depositAmount;
    }

    public withdraw(withdrawAmount: number): void{
        if (this.checkWithdrawAmount(withdrawAmount) === true) {
            this.amount = this.amount - withdrawAmount;
            console.log(`Withdraw successful! Your balance is updated.`);
        }
        else {
            console.log(`Invalid withdraw amount!`)
            console.log(`Withdraw Amount can not be greater than your current balance.`)
            console.log(`Please check your balance before continue transaction!`)
        }
    }

    private checkWithdrawAmount(withdrawAmmount: number): boolean{
        if (this.amount < withdrawAmmount) return false;
        else return true;
    }
}
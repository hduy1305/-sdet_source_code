import BankAccount from "./BankAccount";

export default class CheckingAccount extends BankAccount {

    private minimumBalance: number;

    constructor (amount: number){
        super();
        this.accountType = "CheckingAccount";
        this.minimumBalance = 50;
        this.amount = amount;
    }

    public deposit(depositAmount: number): void{
        this.amount = this.amount + depositAmount;
    }

    public withdraw(withdrawAmount: number): void {
        if (this.checkWithdrawAmount(withdrawAmount) === true) {
            this.amount = this.amount - withdrawAmount;
            console.log(`Withdraw successful! Your balance is updated.`);
        }
        else {
            console.log(`Invalid withdraw amount!`)
            console.log(`You must have atleast ${this.minimumBalance} in your checking account.`)
        }
    }

    private checkWithdrawAmount(depositAmount: number): boolean{
        if(this.amount - depositAmount > this.minimumBalance) return true;
        else return false;
    }
}
export default abstract class BankAccount {

    protected accountType: string = "BankAccount";
    protected amount: number = 0;

    protected abstract deposit(depositAmount: number): void;

    protected abstract withdraw(withdrawAmount: number): void;

    public getBalance(): number{
        return this.amount;
    }
}
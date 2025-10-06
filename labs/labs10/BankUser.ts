import BankAccount from "./BankAccount"

//For scalability :

export default class BankUser {

    private bankAccounts: BankAccount[] = [];
    private username: string = "";

    constructor (username: string, bankAccount: BankAccount[]){
        this.bankAccounts = this.bankAccounts;
        this.username = username;
    }
    
    public getUserOption() {
    }

    public getUserTransactionAmount(){

    } 
}
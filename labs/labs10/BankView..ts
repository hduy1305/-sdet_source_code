import CheckingAccount from "./CheckingAccount";
import SavingsAccount from "./SavingsAccount";


const savingAccount = new SavingsAccount(5000);
const checkingAccount = new CheckingAccount(4000);

console.log(`----- Saving Account -----`);

savingAccount.withdraw(3000);
console.log(savingAccount.getBalance());

savingAccount.withdraw(2001);
console.log(savingAccount.getBalance());

savingAccount.deposit(3000);
console.log(savingAccount.getBalance());

console.log(`----- Checking Account -----`);

checkingAccount.withdraw(2000);
console.log(checkingAccount.getBalance());

checkingAccount. withdraw(1952);
console.log(checkingAccount.getBalance());

checkingAccount.deposit(5000);
console.log(checkingAccount.getBalance());
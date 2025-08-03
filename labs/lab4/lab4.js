const readline = require("readline-sync");
let bankCountNumber = {
    accountNumber: "023456789",
    routingNumber: "987654321",
    balance: 1000
}
//create account list
let bankAccount1 = JSON.parse(JSON.stringify(bankCountNumber));
bankAccount1.accountNumber = "123456789";

let bankAccount2 = JSON.parse(JSON.stringify(bankCountNumber));
bankAccount2.accountNumber = "223456789";

let bankAccount3 = JSON.parse(JSON.stringify(bankCountNumber));
bankAccount3.accountNumber = "323456789";

let bankAccounts = [bankAccount1, bankAccount2, bankAccount3];
const {accountNumber, balance} = bankAccounts;

//application
let exit = false;
while(!exit){
    console.log("=== Banking application ===");
    console.log("1. Find an account");
    console.log("2. Update balance");
    console.log("0. Exit the program");
    let userOption = Number(readline.question("Choose an option: "))
    switch(userOption){
        case 1:
            let userInputNumber = readline.question("Input your account's number: ");
            let findAcc = findAccount(bankAccounts, userInputNumber);
            if(findAcc === null){
                console.log(`No account was found with numbers: ${userInputNumber}`);
            }
            else{
                console.log(`Account was found`)
                console.log(`Account's Number: ${findAcc.accountNumber}`);
                console.log(`Account's Balance: ${findAcc.balance}`);
            }
            break;
        case 2:
            let inputWithdrawAccountNumber = readline.question("Input account's number you want to withdraw: ");
            let findWithdrawAccountNumber = findAccount(bankAccounts, inputWithdrawAccountNumber);
            if(findWithdrawAccountNumber === null){
                console.log(`No account was found with numbers: ${inputWithdrawAccountNumber}`);
            }
            else{
                console.log(`Account was found`)
                console.log(`Account's Number: ${findWithdrawAccountNumber.accountNumber}`);
                console.log(`Account's Balance: ${findWithdrawAccountNumber.balance}`);
                let inputWithdrawAmount = Number(readline.question("Enter Withdraw Amount: "));
                if(findWithdrawAccountNumber.balance < inputWithdrawAmount){
                    console.log(`You don't have enough balance to withdraw ${inputWithdrawAmount}`);
                    // continue;
                }else{
                    let updatedAccount =  updateBalance(findWithdrawAccountNumber, inputWithdrawAmount);
                    console.log(`Your balance updated: ${updatedAccount.balance}`);
                }
            }
            break;
        case 0:
            console.log("See you later!")
            exit = true;
            break;
        default:
            console.log("Invalid number - No function was found");
    }
    console.log("- - - - - - - - - - - - - - - -");
}




function findAccount(bankAccounts, number){
    for(const account of bankAccounts){
        if(account.accountNumber === number){
            return account;
        }
    }
    return null;
}

function updateBalance(bankAccount, withdrawAmount){
    bankAccount.balance -= withdrawAmount;
    return bankAccount; 
}

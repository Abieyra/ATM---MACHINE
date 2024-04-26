#!/usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk";

let myBalance = 10000;
let myPin = 5678;

console.log(chalk.blue("WELCOME TO MY ATM MACHINE"));

 let pinAnswer = await inquirer.prompt(
     [
        {
            name: "pin",
            message:chalk.yellow ("enter your pin"),
            type: "number" 
        }
            ]
);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\nPin Code Is Correct, Login Successfully!!!\n"));
    console.log(`Current Account Balance is ${myBalance}`)

let operationAns = await inquirer.prompt(
[
   {
     name: "operation",
     message:"Please Select An Operation",
     type: "list",
     choices: ["Withdraw Amount","Check Balance"]

                 }
                    ]
);
console.log(operationAns);

if(operationAns.operation === "Withdraw Amount"){
    let amountAns = await inquirer.prompt(
       [
           {
            name:"amount",
            message:"Enter The Amount",
            type:"number"
                         }
                           ]
);
if(amountAns.amount > myBalance ){
    console.log(chalk.red("You Have Insufficient Balance"));
}
else{
     myBalance -= amountAns.amount;
     console.log(chalk.green(`${amountAns.amount} Withdraw Successfully`));
     console.log(`Your Remaining Balance Is:${myBalance}`)
    }
    
} 
 else if (operationAns.operation === "Check Balance"){                      
    console.log(`Your Current Balance Is: ${myBalance}`);
}

}
else {
    console.log(chalk.red("Pincode Is Incorrect, Try Again!!"));
}

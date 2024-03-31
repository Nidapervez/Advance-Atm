#! /usr/bin/env node
import inquirer from "inquirer";

(async () => {
    let myBalance = 10000; // Initial balance
    let myPin = 1234; // Default PIN

    // Prompt user for PIN
    let pinAnswer = await inquirer.prompt([
        {
            name: "pin",
            message: "Enter your PIN",
            type: "number"
        }
    ]);

    if (pinAnswer.pin === myPin) {
        console.log("Correct PIN code");

        // Prompt user for operation
        let operationAnswers = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select an operation",
                type: "list",
                choices: ["Withdraw", "Check balance", "fastcash"]
            }
        ]);

        if (operationAnswers.operation === "Withdraw") {
            // Prompt user for withdrawal amount
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter the amount to withdraw",
                    type: "number"
                }
            ]);

            // Check if sufficient balance is available
            if (myBalance >= amountAns.amount) {
                myBalance -= amountAns.amount;
                console.log(`Withdrawal successful!,remaining balance is ${myBalance}`);
            } else {
                console.log("Insufficient balance!");
            }
        } else if (operationAnswers.operation === "Check balance") {
            // Display current balance
            console.log(`Your current balance is: ${myBalance}`);
        } 
        let fastcashanswer = await inquirer.prompt([
            {
                name: "fastcash",
                message: "Enter the amount to withdraw",
                type: "list",
                choices:["1000", "2000", "3000"]
            }])
            else if(operationAnswers.operation === "fastcash"){
            if (myBalance >= fastcashanswer.fastcash) {
                myBalance -= 1000;
                console.log(`Withdrawal of 1000 successful!",remaining balance is ${myBalance}`);
            } else if (myBalance >= fastcashanswer.fastcash) {
                myBalance -= 2000;
            console.log(`Withdrawal of 2000 successful!,remaining balance is ${myBalance}`);
            } else if (myBalance >= fastcashanswer.fastcash) {
                myBalance -= 3000;
                console.log(`Withdrawal of 3000 successful,remaining balance is ${myBalance}`!);
            } else {
                console.log("Insufficient balance to withdraw 1000, 2000, or 3000!");
            }
        }

    } else {
        console.log("Incorrect PIN code");
    }
})();

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlack(`\n currency Converter \n`));
const currency = {
    USD: 1, // BASE CURRENCY
    EUR: 0.92,
    GBP: 0.77,
    INR: 83.51,
    PKR: 280
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'to',
        message: "Enter to Currency",
        type: 'list',
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: 'amount',
        message: "Enter Your Amount",
        type: 'number'
    }
]);
let fromAmount = currency[user_answer.from]; // exchange rate
let toAmount = currency[user_answer.to]; // exchange rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);

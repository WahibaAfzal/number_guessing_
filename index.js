#!/usr/bin/env node
import inquirer from "inquirer";
// 1): computer will generate a number
// 2):  user input for guessing number
// 3):  compare user input with compuer generated number & show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please Guess a Number between 1 - 10: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congrulations! you Guessed the right number.");
}
else {
    console.log("You Guessed the wrong number.");
}

#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
const randomNumber = Math.round(Math.random()*10);
let status = false;
//console.log(randomNumber);
while(!status){
const userInput = await inquirer.prompt({
        name:'user_guess',
        type:"number",
        message:"Guess the number...",
});
    if(userInput.user_guess === randomNumber){
        status = true;
        console.log(chalk.magentaBright("Hurray! Guess was right..."));
    }else{
        console.log("Opppsiii!! Try Again....");
    }
    
}


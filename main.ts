#! /usr/bin/env node 

import inquirer from "inquirer"
import chalk  from "chalk"

console.log(chalk.italic.bold.rgb(30,0,254)("\n\n\t\t<<<<------WELCOME TO CURRENCY CONVERTR------->>>> \t\t\n\n"));


let currency : any = {
    USD:1, //USA // BASE CURRENCY 
    SAR:3.7500, // saudia 
    PKR:278,// pakistan
    AED:3.6725, // DUBAI
    INR:83, // india 
    KWD:0.3075, // kwait,
    GBP:0.7918,// UK 

}

let transmogrify = await inquirer.prompt(
    [ 
        {
           name : "from",
           type :"list",
           message: chalk.green("please select which currency you want convert from :  ") ,
           choices : ["USD","SAR","PKR","AED","INR","KWD"]
        },
        {
            name : "to",
            type : "list",
            message : chalk.green("Select which currency you want to convert : "),
            choices : ["USD","SAR","PKR","AED","INR","KWD"]
        },
        {
            name : "amount",
            type : "number",
            message : chalk.green(`please enter the amount `)
        }
    
    ]
)
let fromAmount = currency[transmogrify.from]
let toAmount = currency[transmogrify.to];
let Amount = transmogrify.amount

// formula of currency converter 
let divide = Amount / fromAmount
let convertAmo = divide * toAmount
let answer = Math.floor(convertAmo);


if(!transmogrify.amount ){
   console.log(chalk.rgb(255,0,5)("\n\tError : please enter an amount to convert \n"));
   
}else {
    console.log(chalk.yellowBright.bold(`\n\tHere is your convert amount: ${chalk.cyan(answer) }`));
    console.log(chalk.magenta("\n'THANK YOU' for using this foreign exchange rate!\n"));
    
}




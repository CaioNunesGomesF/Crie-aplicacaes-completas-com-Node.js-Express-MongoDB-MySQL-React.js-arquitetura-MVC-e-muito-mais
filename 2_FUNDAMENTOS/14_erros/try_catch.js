const x = '10'
const chalk = require('chalk');

try{
    x = 2
}
catch(err){
    console.log(chalk.bgRed.bold(`Error: ${err}`))
}
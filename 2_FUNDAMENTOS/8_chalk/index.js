const chalk = require('chalk');
const limparConsole = require('../../limparConsole')

limparConsole.limparConsole()

const nota = 5

if(nota > 7 && nota <=10){
    console.log(chalk.green("Parabens! Sua nota foi acima da media!"))
}
else if(nota==7){
    console.log(chalk.yellow("Parabéns! você está na media!"))
}
else if(nota > 0 && nota < 7){
    console.log(chalk.bgRed.black.bold("Estude mais! sua nota está abaixo da media!"))
}
else{

    console.log("Nota invalida")
}




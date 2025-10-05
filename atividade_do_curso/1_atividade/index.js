const chalk = require("chalk")
const inquirer = require("inquirer")

inquirer.prompt([
    {name: 'nome', message: 'Qual seu nome?'},
    {name: 'idade', message: 'Qual sua idade?'}
])
.then((answers) => {

    if(!answers.nome){
        throw new Error(`VOcê não digitou um valor para nome!`)
    }
    if(!answers.idade){
        throw new Error(`VOcê não digitou um valor para idade!`)
    }

    const response = chalk.bgGreen.white(`O nome do usuário é ${answers.nome} e ele tem ${answers.idade} anos!`)



}
)
.catch( (err) => {    
    console.log(chalk.bgYellow.black(err))
}

)
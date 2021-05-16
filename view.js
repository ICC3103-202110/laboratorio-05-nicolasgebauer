const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.green(
        figlet.textSync(
           'Tip  Calculator App',
        {
            horizontalLayout: 'full',
            font: 'Nancyj-Underlined'
        }
        )
    )
}
function getTable(model){
    const {billAmount} = model
    const {tipPorcentage} = model
    const {tip} = model
    const {total} = model
    return[
        {
            'Bill Amounte':billAmount,
            'Tip (%)':tipPorcentage,
            'Tip': tip,
            'Total': total
        }
    ]
}

function inputForm(model){
    const {input1} = model
    const message1 = 'Bill Amount?'
    const {input2} = model
    const message2 = 'Tip(%)?'
    return inquirer.prompt([
        {
        name: 'input1',
        type: 'input',
        message: message1,
        default: input1,
        validate: function(value){
            if (value >= 0){
                return true
            } else {
                return 'Enter a non-negative value'
                }
            }
        },
        {
        name: 'input2',
        type: 'input',
        message: message2,
        default: input2,
        validate: function(value){
            if (value >= 0 && value<=100){
                return true
            } else {
                 return 'Porcentage out of range'
                }
            }
        }  
    ])
}

function view(model){
    return{
        title: getTitle(),
        table: getTable(model)
    }
}
module.exports ={
    view,
    inputForm
}
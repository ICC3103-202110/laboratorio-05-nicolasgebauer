const {getTitle} = require('./view')
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    const {model, currentView} = state
    const {title, table} = currentView

    // Input/Output
    console.clear()
    console.log(title)
    printTable(table)

    // FORM (Ask user input)
    const {input1, input2} = await inputForm(model)
    console.log(input1, input2)
}

module.exports = {
    app
}
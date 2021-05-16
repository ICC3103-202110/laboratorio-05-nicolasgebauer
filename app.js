const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

async function app(state, update, view){
    while(true){
        const {model, currentView} = state
        const {title, table} = currentView

        // Input/Output
        console.clear()
        console.log(title)
        printTable(table)

        // FORM (Ask user input)
        const {input1, input2} = await inputForm(model)
        const updatedModel = update(input1, input2, model)
        state = {
            ...state,
            model: updatedModel,
            currentView: view(updatedModel)
        }  
    }
   
}

module.exports = {
    app
}
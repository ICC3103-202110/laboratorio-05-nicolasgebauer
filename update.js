
function porcentageOfBillAmount(newBillAmount, newTipPorcentage){
    return (newBillAmount*newTipPorcentage)/100
}

function billAmountPlusTip(newBillAmount, tip){
    return newBillAmount+tip
}

function update(input1, input2, model){
    const newBillAmount = Number(input1)
    const newTipPorcentage = Number(input2)
    const tip =  porcentageOfBillAmount(newBillAmount, newTipPorcentage)
    const total = billAmountPlusTip(newBillAmount, tip)
    return {
        ...model,
        billAmount: '$'+newBillAmount,
        tipPorcentage: newTipPorcentage+'%',
        tip: '$'+tip,
        total: '$'+total
    }
    
}

module.exports = {
    update
}
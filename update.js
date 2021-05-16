
function porcentageOfBillAmount(newBillAmount, newTipPorcentage){
    const num = (Number(newBillAmount)*Number(newTipPorcentage))/100
    const numLimited = num.toFixed(2)
    return numLimited
}

function billAmountPlusTip(newBillAmount, tip){
    return Number(newBillAmount)+Number(tip)
}

function update(input1, input2, model){
    const newBillAmount = Number(input1)
    const newTipPorcentage = Number(input2)
    const tip =  porcentageOfBillAmount(newBillAmount, newTipPorcentage)
    const total = billAmountPlusTip(newBillAmount, tip)
    return {
        ...model,
        billAmount: '$'+newBillAmount,
        pastBillAmount: newBillAmount,
        tipPorcentage: newTipPorcentage+'%',
        pastTipPorcentage: newTipPorcentage,
        tip: '$'+tip,
        total: '$'+total
    }
    
}

module.exports = {
    update
}
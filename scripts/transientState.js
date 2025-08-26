const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0,
    orderTotal: 0
}

let entreeTotal = 0
let vegetableTotal = 0
let sideTotal = 0

export const setEntree = (entreeId, price) => {
    transientState.entreeId = entreeId
    entreeTotal = price
    transientState.orderTotal = entreeTotal + vegetableTotal + sideTotal
    console.log(transientState)
}

export const setVegetable = (veggieId, price) => {
    transientState.vegetableId = veggieId
    vegetableTotal = price
    transientState.orderTotal = entreeTotal + vegetableTotal + sideTotal
    console.log(transientState)
}

export const setSide = (sideId, price) => {
    transientState.sideId = sideId
    sideTotal = price
    transientState.orderTotal = entreeTotal + vegetableTotal + sideTotal
    console.log(transientState)
}
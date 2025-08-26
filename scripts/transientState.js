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
    transientState.orderTotal = parseFloat((entreeTotal + vegetableTotal + sideTotal).toFixed(2))
    console.log(transientState)
}

export const placeOrder = async() => {
    if((!transientState.entreeId) && (!transientState.vegetableId) && (!transientState.sideId)) {
        window.alert("Please finish making your selections!")
    } else {
        const postOrders = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(transientState)
        }
        const response = await fetch("http://localhost:8088/purchases", postOrders)

        const newOrderEvent = new CustomEvent("newOrderPlaced")
        document.dispatchEvent(newOrderEvent)
        transientState.entreeId = 0
        transientState.vegetableId = 0
        transientState.sideId = 0
        transientState.orderTotal = 0
        entreeTotal = 0
        vegetableTotal = 0
        sideTotal = 0
    }
}
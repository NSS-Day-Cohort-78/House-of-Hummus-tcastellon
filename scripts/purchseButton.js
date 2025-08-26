import { placeOrder } from "./transientState.js"

const handlePurchaseOrder = (clickEvent) => {
    if(clickEvent.target.id === "purchase") {
        placeOrder()
    }
}

export const purchaseButton = () => {
    document.addEventListener("click", handlePurchaseOrder)

    return `<button id="purchase">Purchase Combo</button>`
}
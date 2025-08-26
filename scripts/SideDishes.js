import { setSide } from "./transientState.js"

const sideChangeHandler = (changeEvent) => {
    if(changeEvent.target.name === "sides") {
        setSide(parseInt(changeEvent.target.value), parseFloat(changeEvent.target.dataset.sideprice))
    }
}

export const sideOptions = async () => {
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    document.addEventListener("change", sideChangeHandler)

    let sidesHTML = ``

    const divStringArray = sides.map(
        (side) => {
            return `<div>
            <input type="radio" name="sides" data-sidePrice="${side.price.toFixed(2)}" value="${side.id}" /> ${side.title}
            </div>`
        }
    )
    sidesHTML = divStringArray.join("")
    
    return sidesHTML
}
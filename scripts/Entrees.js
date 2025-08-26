import { setEntree } from "./transientState.js"

const entreeChangeHandler = (changeEvent) => {
    if(changeEvent.target.name === "entree") {
        setEntree(parseInt(changeEvent.target.value), parseFloat(changeEvent.target.dataset.entreeprice))
    }
}

export const entreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    document.addEventListener("change", entreeChangeHandler)
   
    let entreesHTML = ``

    const divStringArray = entrees.map(
        (entree) => {
            return `<div>
            <input type="radio" name="entree" data-entreePrice="${entree.price.toFixed(2)}" value="${entree.id}" /> ${entree.name}
            </div>`
        }
    )
    entreesHTML = divStringArray.join("")
    
    return entreesHTML
}
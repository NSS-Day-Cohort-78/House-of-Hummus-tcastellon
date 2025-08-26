export const vegetableOptions = async () => {
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    let vegetablesHTML = ``

    const divStringArray = vegetables.map(
        (vegetable) => {
            return `<div>
            <input type="radio" name="veggies" data-veggiePrice="${vegetable.price.toFixed(2)}" value="${vegetable.id}" /> ${vegetable.type}
            </div>`
        }
    )
    vegetablesHTML = divStringArray.join("")
    return vegetablesHTML
}

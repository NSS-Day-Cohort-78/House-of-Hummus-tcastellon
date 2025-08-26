export const entreeOptions = async () => {
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    let entreeHTML = ``

    const divStringArray = entrees.map(
        (entree) => {
            return `<div>
            <input type="radio" name="entree" data-entreePrice="${entree.price}" value="${entree.id}" /> ${entree.name}
            </div>`
        }
    )
    entreeHTML = divStringArray.join("")
    
    return entreeHTML
}
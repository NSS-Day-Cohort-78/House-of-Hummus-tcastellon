export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side").then(res => res.json())

    let salesHTML = sales.map(
        (sale) => {
            return `
                <section class="orders-placed-container">
                    <p>Receipt #${sale.id} = ${sale.orderTotal.toLocaleString("en-US", {style: "currency", currency: "USD"})}
            `
        })

    salesHTML = salesHTML.join("")

    return salesHTML
}


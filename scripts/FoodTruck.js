// import { Sales } from "./Sales.js"
import { entreeOptions } from "./Entrees.js"
import { vegetableOptions } from "./Vegetables.js"
import { sideOptions } from "./SideDishes.js"

export const FoodTruck = async() => {
    // const salesHTML = Sales()
    const entreesHTML = await entreeOptions()
    const veggiesHTML = await vegetableOptions()
    const sidesHTML = await sideOptions()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="selections">
            <div class="base-dish">
                <h3>Base Dish</h3>
                ${entreesHTML}
            </div>
            <div class="veggie-dish">
                <h3>Vegetable</h3>
                ${veggiesHTML}
            </div>
            <div class="side-dish">
                <h3>Sides</h3>
                ${sidesHTML}
            </div>
        </article>
        <article>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            
        </article>

    `
}
// ${salesHTML} moved from monthly sales
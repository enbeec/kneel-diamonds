import { addCustomOrder } from "./database.js"
import { DiamondSizes } from "./DiamondSizes.js"
import { JewelryStyles } from "./JewelryStyles.js"
import { Metals } from "./Metals.js"
import { Orders } from "./Orders.js"

// QUESTION: why arent we getting the button and adding an event listener to it directly?
//  UPDATE: okay so if it runs here, the button isn't in the DOM yet. I think I see why...
//          I could still do this....
// const createOrderButton = () => {
//     document.querySelector('#orderButton').addEventListener("click",
//         (event) => {
//             console.log("Adding a new order to the database")
//             addCustomOrder()
//         }
//     )
// }
// ...and then call it after the initial render?

document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            console.log("Adding a new order to the database")
            addCustomOrder()
        }
    }
)

export const KneelDiamonds = () => {
    return /*html*/`
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${Metals()}
            </section>
            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${DiamondSizes()}
            </section>
            <section class="choices__styles options">
                <h2>Styles</h2>
                ${JewelryStyles()}
            </section>
        </article>

        <article>
            <button id="orderButton">Create Custom Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${Orders()}
        </article>
    `
}


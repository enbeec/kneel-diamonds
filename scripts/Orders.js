import { getSizes, getMetals, getOrders, getStyles } from "./database.js"

const metals = getMetals()
const styles = getStyles()
const sizes = getSizes()

const buildOrderListItem = (order) => {
    // find the the right object and store it's price
    const metalPrice = metals.find((metal) => metal.id === order.metalId).price
    const stylePrice = styles.find((style) => style.id === order.styleId).price
    const sizePrice = sizes.find((size) => size.id === order.sizeId).price
    const totalCost = sizePrice + stylePrice + metalPrice
    const costString = totalCost.toLocaleString("en-US", 
        {
            style: "currency",
            currency: "USD"
        }
    )
    // let dateString = new Date(order.timestamp).toString().split(" ").slice(0,5).join(" ") // lol
    let dateString = new Date(order.timestamp).toLocaleString()
    return `<li>
        Order #${order.id} was placed on ${dateString} and costs ${costString}
    </li>`
}

export const Orders = () => {
    // we need to find new orders when we re-render the page
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}


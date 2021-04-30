import { setSize, getSizes } from "./database.js"

const sizes = getSizes()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "size") {
            setSize(parseInt(event.target.value)) // value of target is id of Size
        }
    }
)

export const DiamondSizes = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = sizes.map(size => {
        // TODO: put the prices in a span or something to space and style them
        return `<li>
            <input type="radio" name="size" value="${size.id}" /> ${size.carets} carets costs $${size.price.toFixed(2)}
        </li>`
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}

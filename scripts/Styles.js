import { setStyle, getStyles } from "./database.js"

const styles = getStyles()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "style") {
            const [, inputId ] = event.target.value.split("--") // splitting: "style--1" -> ["style", "1"]
            setStyle(parseInt(inputId)) 
        }
    }
)

export const JewelryStyles = () => {
    let html = "<ul>"

    // Use .map() for converting objects to <li> elements
    const listItems = styles.map(
        // TODO: put the prices in a span or something to space and style them
        style => {
            return `<li>
                <input type="radio" name="style" value="style--${style.id}" /> ${style.style} is $${style.price.toFixed(2)}
            </li>`
        }
    )

    // Join all of the strings in the array into a single string
    html += listItems.join("")

    html += "</ul>"
    return html
}


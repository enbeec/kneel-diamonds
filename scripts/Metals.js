import { getMetals, setMetal } from "./database.js"

const metals = getMetals()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "metal") {
            setMetal(parseInt(event.target.value)) // value of target is id of Metal
        }
    }
)

export const Metals = () => {
    let html = "<ul>"

    html += metals.map(metal => { // adding straight to html string because we call join on line 21
        return `<li>
            <input type="radio" name="metal" value="${metal.id}" /> ${metal.metal}
        </li>`
    }).join("") // call join directly on the new array

    html += "</ul>"
    return html
}

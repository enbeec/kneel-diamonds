import { KneelDiamonds } from "./KneelDiamonds.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}

document.addEventListener("stateChanged",
    (event) => {
        console.log("Event: stateChanged --> regenerating HTML")
        renderAllHTML()
    })

// first render is manual because we're not doing anything async like fetching
renderAllHTML()


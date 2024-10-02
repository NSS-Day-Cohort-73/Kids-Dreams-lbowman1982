import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"
    for (const celebrity of celebrities) {
        html += `<li data-type="celeb" data-sport="${celebrity.sport}"> 
                    ${celebrity.name}
                 </li>`
     }

    html += "</ol>"
    return html
}

 /*
document.addEventListener(
    "click",
    (clickEvent) => {
        const celebTarget = clickEvent.target
        if (celebTarget.sport !== undefined) {
            window.alert("place holder")
        }
    }
)
    */



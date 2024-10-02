import { getChildren } from "./database.js"

const children = getChildren()

document.addEventListener(
    "click",
    (clickEvent) => {
        const target = clickEvent.target

        if (target.dataset.type === "child") {
        //window.alert(`${target.dataset.wish}`)
        window.alert(`${target.dataset.wish}`)
        }
        else if(target.dataset.type === "celeb") {
            window.alert(`${target.dataset.sport}`)
        } 
    }
)   



export const Kids = () => {
    let html = "<ol>"
    for (const child of children) {
        html += `<li data-id="${child.id}" data-type="child" data-wish="${child.wish}">${child.name}</li>`
    }
    html += "</ol>"
    return html
    }
    
    

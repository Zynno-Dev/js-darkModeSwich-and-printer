
document.getElementById("theme").addEventListener("click", themeChanger)
let temaActual = "light"

function themeChanger(e){
    if(temaActual == "light"){
    document.getElementById("main").className = "dark";
    temaActual = "dark"
    } else {
        document.getElementById("main").className = "light";
        temaActual = "light"
    }
}

document.getElementById("printButton").addEventListener("click", imprimir)

function imprimir(e){
    let toprint = document.getElementById("print").value
    let nodoPrint = document.createElement("p")
    let textoPrint= document.createTextNode(toprint)
    nodoPrint.appendChild(textoPrint)
    document.getElementById("divToPrint").appendChild(nodoPrint)
}
//buttons
var eua = document.querySelector("input.doll")
var ger = document.querySelector("input.euro")

//Event Listener
eua.addEventListener('click', coin1)
ger.addEventListener('click', coin2)

function coin1(){
    //input
    var real = document.querySelector("input#real")
    var R = Number.parseFloat(real.value)
    //Coins
    var Dolar = R/5.75
    result.innerHTML = `<h6>$${Dolar}</h6>`

}
function coin2(){
    //input
    var real = document.querySelector("input#real")
    var R = Number.parseFloat(real.value)
    //Coins
    var Euro = R/6.73
    result.innerHTML = `<h6>€${Euro}</h6>`
}

//output
var result = document.querySelector("div#result")


const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")
const four = document.getElementById("four")
const five = document.getElementById("five")
const six = document.getElementById("six")
const first = document.getElementById("first")
const second = document.getElementById("second")

let boardOne = 0
let boardTwo = 0

// first board

one.addEventListener("click", ()=>{
    boardOne++
    first.textContent = boardOne
})

two.addEventListener("click", ()=>{
    boardOne+=2
    first.textContent = boardOne
})

three.addEventListener("click", ()=>{
    boardOne+=3
    first.textContent = boardOne
})

// second board

four.addEventListener("click", ()=>{
    boardTwo+=1
    second.textContent = boardTwo
})

five.addEventListener("click", ()=>{
    boardTwo+=2
    second.textContent = boardTwo
})

six.addEventListener("click", ()=>{
    boardTwo+=3
    second.textContent = boardTwo
})


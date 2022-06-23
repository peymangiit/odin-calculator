// const buttons = document.querySelectorAll("button");
// buttons.forEach(button => {
//      button.addEventlistener("click", (e) => console.log (e.target.textContent))

// });
console.log ("test okey")
const textScreen = document.querySelector('.text-screen')
const buttons = document.querySelectorAll('button')
console.log(buttons)
buttons.forEach(button => {
    button.addEventListener('click' , () => {
        console.log(button.textContent)
        textScreen.textContent += button.textContent
    })
})
const numbers = document.querySelectorAll('.numbers')
console.log(numbers)
const operators = document.querySelectorAll('.operators')
console.log(operators)
const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', clear)

function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}


function operate(a,operator,b) {

    switch (operator) {
        case "+":
            add()
            break;
        case "-":
            subtract()    
            break;
        case "x" :
            multiply()    
            break;
        case "/":
            divide()    
            break;
    
        default:
            break;
    }
}
function updateDisplay() {
    
}
function clear() {
  textScreen.textContent = ""
}
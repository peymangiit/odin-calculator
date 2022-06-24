class Calculator{
    constructor(previousOperandText,currentOperandText) {
        this.previousOperandText = previousOperandText
        this.currentOperandText = currentOperandText
        this.clear()
    }
   
     clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.computation = ''
        this.operator = undefined
      }
      delete(){
        this.currentOperand = this.currentOperand.toString().slice(0,-1)
      }
     appendNumber(number) {
        if(number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
     chooseOperand(operator) {
        if(this.currentOperand === '') return
        if(this.previousOperand !== ''){
            this.operate()

        }
        this.operator = operator
       
       if(this.computation !== this.currentOperand || this.computation == ''){
        this.previousOperand += this.currentOperand
       }
       this.computation = this.currentOperand
        this.previousOperand += this.operator
        this.currentOperand =''
    }
     updateDisplay() {
        this.currentOperandText.textContent = this.currentOperand
        this.previousOperandText.textContent = this.previousOperand
    }
     operate() {
        let operation
        const prev = parseFloat(this.computation)
        const current = parseFloat(this.currentOperand)
        if(isNaN(prev) || isNaN(current)) return

        switch (this.operator) {
            case "+":
                operation = prev + current
                break;
            case "-":
                operation = prev - current
                break;
            case "x" :
                operation = prev * current
                break;
            case "/":
                operation = prev / current
                break;
        
            default:
                return;
        }
       this.previousOperand += this.currentOperand
        this.currentOperand = operation
        this.computation = operation
        this.operator = undefined
       
    }
}
const numberButtons = document.querySelectorAll('[data-number]')
console.log(numberButtons)
const operatorButtons = document.querySelectorAll('[data-operator]')
console.log(operatorButtons)
const deleteButton = document.querySelector('.delete')
console.log(deleteButton)
const equalsButton = document.querySelector('.result')
console.log(equalsButton)
const clearButton = document.querySelector('.clear')
// clearButton.addEventListener('click', clear)

const previousOperandText = document.querySelector('[data-pre-operand]')
console.log(previousOperandText)
const currentOperandText = document.querySelector('[data-current-operand]')
console.log(currentOperandText)


const calculator = new Calculator(previousOperandText,currentOperandText)

numberButtons.forEach(button => {
    button.addEventListener('click' , () => {
        calculator.appendNumber(button.textContent)
        calculator.updateDisplay()
    })
})
operatorButtons.forEach(button => {
    button.addEventListener('click' , () => {
    calculator.chooseOperand(button.textContent)
    calculator.updateDisplay()
    })
})
equalsButton.addEventListener('click', button => {
    calculator.operate()
    calculator.updateDisplay()
})
clearButton.addEventListener('click' , button =>{
    calculator.clear()
    calculator.updateDisplay()
})
deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})
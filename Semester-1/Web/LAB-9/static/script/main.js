class MyCalc {
    constructor(lastOpTextEl, currentOpTextEl) {
        this.lastOpTextEl = lastOpTextEl
        this.currentOpTextEl = currentOpTextEl
        this.clear()
    }

    clear() {
        this.lastOp = ''
        this.currentOp = ''
        this.op = undefined
    }

    delete() {
        this.currentOp = this.currentOp.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOp.includes('.')) return
        this.currentOp = this.currentOp.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOp === '') return
        if (this.lastOp !== ''){
            this.compute()
        }
        this.op = operation
        this.lastOp = this.currentOp
        this.currentOp = ''
    }

    compute() {
        let computation
        const last = parseFloat(this.lastOp)
        const current = parseFloat(this.currentOp)
        if (isNaN(last) || isNaN(current)) return
        switch (this.op) {
            case '+':
                computation = last + current
                break
            case '-':
                computation = last - current
                break
            case '*':
                computation = last * current
                break
            case '÷':
                computation = last / current
                break
            default:
                return
        }
        this.lastOp = ''
        this.currentOp = computation
        this.op = undefined
    }

    getDisplayNum(number) {
        const stringNum = number.toString()
        const integerDigits = parseFloat(stringNum.split('.')[0])
        const decimalDigits = stringNum.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0})
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOpTextEl.innerText =
            this.getDisplayNum(this.currentOp)
        if (this.op != null) {
            this.lastOpTextEl.innerText =
                `${this.getDisplayNum(this.lastOp)} ${this.op}`
        } else {
            this.lastOpTextEl.innerText = ''
        }
    }
}


const numButtons = document.querySelectorAll('[data-number]')
const opButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const lastOpTextEl = document.querySelector('[data-last-command]')
const currentOpTextEl = document.querySelector('[data-current-command]')

const calculator = new MyCalc(lastOpTextEl, currentOpTextEl)

numButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})

opButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

clearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})
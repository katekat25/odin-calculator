let leftNumber = 0;
let rightNumber = 0;
let operator = "";
const displayValue = document.querySelector("#display");
const numButtons = document.querySelectorAll("#button-container > button");
const operatorButtons = document.querySelectorAll("#actions-container > .operator");
const displayButtons = document.querySelectorAll("#button-container > button, #actions-container > .operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const listOfAllOperators = "+-X/"

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonValue = button.textContent;
        console.log("Button clicked is " + buttonValue);
        displayValue.textContent += buttonValue;
    });
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonValue = button.textContent;
        console.log("Button clicked is " + buttonValue);
        console.log("listOfAllOperators is " + listOfAllOperators);
        console.log("Last char of string displayValue is " + displayValue.textContent.slice(-1));
        console.log("Is this last char NOT an operator? " + !listOfAllOperators.includes(displayValue.textContent.slice(-1)))
        if (!listOfAllOperators.includes(displayValue.textContent.slice(-1))) {
            displayValue.textContent += buttonValue;
        }
    })
})

clearButton.addEventListener("click", () => {
    displayValue.textContent = "";
})

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "*":
            return multiply(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
        default:
            console.log("Some kind of wacky thang happened oops.");
    }
}

//if its a number key, get the number pressed and add it to the ongoing display (a string maybe?)
//if its an operator key do that too
//if its an equals key then do a different function

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

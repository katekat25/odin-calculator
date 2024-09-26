let leftNumber = 0;
let rightNumber = 0;
let operator = "";
const displayValue = document.querySelector("#display");
const numButtons = document.querySelectorAll("#button-container > button");
const operatorButtons = document.querySelectorAll("#actions-container > .operator");
const displayButtons = document.querySelectorAll("#button-container > button, #actions-container > .operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const listOfAllOperators = "+-X/";

numButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonValue = button.textContent;
        // console.log("Button clicked is " + buttonValue);
        displayValue.textContent += buttonValue;
    });
})

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonValue = button.textContent;
        // console.log("Button clicked is " + buttonValue);
        // console.log("listOfAllOperators is " + listOfAllOperators);
        // console.log("Last char of string displayValue is " + displayValue.textContent.slice(-1));
        // console.log("Is this last char NOT an operator? " + !listOfAllOperators.includes(displayValue.textContent.slice(-1)))
        if (!listOfAllOperators.includes(displayValue.textContent.slice(-1))) {
            displayValue.textContent += buttonValue;
        }
    })
})

equalsButton.addEventListener("click", () => {
    displayValue.textContent = calculate(displayValue.textContent);
})

clearButton.addEventListener("click", () => {
    displayValue.textContent = "";
})

function calculate(string) {
    if (string.includes("/")
    || string.includes("X")
    || string.includes("+")
    || string.includes("-")) {
        console.log("it can find the thang");
    }
    //if theres no operator return the number
    //have it calculate one operator at a time and return a whole number to the working list
    //once there are no more operators in the list, return the number
}

function getEquationParts(string) {

}

//make it (pe)mdas???
//

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

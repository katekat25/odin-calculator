let leftNumber = 0;
let rightNumber = 0;
let operator = "";
const displayValue = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let buttonValue = button.textContent;
        console.log(buttonValue);
    });
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

function populateDisplay() {

}



function clearDisplay() {

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

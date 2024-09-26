//let leftNumber = 0;
//let rightNumber = 0;
//let operator = "";
const displayValue = document.querySelector("#display");
const numButtons = document.querySelectorAll("#button-container > button");
const operatorButtons = document.querySelectorAll("#actions-container > .operator");
const displayButtons = document.querySelectorAll("#button-container > button, #actions-container > .operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const listOfAllOperators = "+-X/";
const numbers = /[0-9]/g;
const operators = /[^0-9]/g;

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
            displayValue.textContent += " " + buttonValue + " ";
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
        //console.log("it can find the thang");
        let arr = string.split(" ");
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr.includes("X")) {
                let indexOfX = arr.indexOf("X");
                console.log("X is at index " + indexOfX);
                console.log("We are replacing " + arr[arr.indexOf("X")] + " with the calculation.");
                arr[arr.indexOf("X")] = operate("X", arr[indexOfX - 1], arr[indexOfX + 1]);
                console.log("After doing the operation, the array is now as follows: " + arr);
                console.log("Now we're trying to get rid of " + arr[indexOfX + 1]);
                arr.splice(indexOfX + 1, 1);
                console.log("Next, we get rid of " + arr[indexOfX - 1]);
                arr.splice(indexOfX - 1, 1);
                console.log("The array is now as follows: " + arr);
            } else if (arr.includes("/")) {
                let indexOfDivide = arr.indexOf("/");
                console.log("/ is at index " + indexOfDivide);
                console.log("We are replacing " + arr[arr.indexOf("/")] + " with the calculation.");
                arr[arr.indexOf("/")] = operate("/", arr[indexOfDivide - 1], arr[indexOfDivide + 1]);
                console.log("After doing the operation, the array is now as follows: " + arr);
                console.log("Now we're trying to get rid of " + arr[indexOfDivide + 1]);
                arr.splice(indexOfDivide + 1, 1);
                console.log("Next, we get rid of " + arr[indexOfDivide - 1]);
                arr.splice(indexOfDivide - 1, 1);
                console.log("The array is now as follows: " + arr);
            } else if (arr.includes("+")) {
                let indexOfPlus = arr.indexOf("+");
                console.log("+ is at index " + indexOfPlus);
                console.log("We are replacing " + arr[arr.indexOf("+")] + " with the calculation.");
                arr[arr.indexOf("+")] = operate("+", arr[indexOfPlus - 1], arr[indexOfPlus + 1]);
                console.log("After doing the operation, the array is now as follows: " + arr);
                console.log("Now we're trying to get rid of " + arr[indexOfPlus + 1]);
                arr.splice(indexOfPlus + 1, 1);
                console.log("Next, we get rid of " + arr[indexOfPlus - 1]);
                arr.splice(indexOfPlus - 1, 1);
                console.log("The array is now as follows: " + arr);
            } else if (arr.includes("-")) {
                let indexOfMinus = arr.indexOf("-");
                console.log("- is at index " + indexOfMinus);
                console.log("We are replacing " + arr[arr.indexOf("-")] + " with the calculation.");
                arr[arr.indexOf("-")] = operate("-", arr[indexOfMinus - 1], arr[indexOfMinus + 1]);
                console.log("After doing the operation, the array is now as follows: " + arr);
                console.log("Now we're trying to get rid of " + arr[indexOfMinus + 1]);
                arr.splice(indexOfMinus + 1, 1);
                console.log("Next, we get rid of " + arr[indexOfMinus - 1]);
                arr.splice(indexOfMinus - 1, 1);
                console.log("The array is now as follows: " + arr);
            }
        }
        return arr[0];
    } else return string;
}

//PEMDAS HELL
//the current for loop wont work because it only works in order.
//


//TODO
//make it (pe)mdas???
//add option for negative numbers
//more operators if desired, like power and sqrt

function operate(operator, a, b) {
    console.log("In operate(). The operator is " + operator + ". The first num is " + a + ". The second num is " + b + ".");
    switch (operator) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return subtract(a, b);
            break;
        case "X":
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
    console.log("Added a and b. I got " + (Number(a) + Number(b)));
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return Number(a) - Number(b);
}

function multiply(a, b) {
    return Number(a) * Number(b);
}

function divide(a, b) {
    return Number(a) / Number(b);
}

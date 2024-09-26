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
        //console.log("it can find the thang");
        let numberArray = string
            .replace(operators, " operator ")
            .split(" ")
            .filter((char) => char !== "operator");

        console.log("numberArray is " + numberArray);

        let operatorArray = string
            .split(numbers)
            .filter((char) => char !== '');

        console.log("operatorArray is " + operatorArray);
        
        for (i = 0; i < operatorArray.length; i++) {
            console.log("In the for loop for the " + i + "th time.");
            console.log("The operator is " + operatorArray[1] + ". The first thing to operate on is " + numberArray[0] + ". The second thing to operate is " + numberArray[1]);
            numberArray[0] = operate(operatorArray[i], numberArray[0], numberArray[1]);
            numberArray[1] = numberArray[1 + i + 1];
            console.log(numberArray[0] + " " + numberArray[1]);
        }

        return numberArray[0];
        //console.log(stringForParsing);



    } else return string;
    //have it calculate one operator at a time and return a whole number to the working list
    //once there are no more operators in the list, return the number
}



//TODO
//make it (pe)mdas???
//add option for negative numbers
//more operators if desired, like power and sqrt
//
//

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

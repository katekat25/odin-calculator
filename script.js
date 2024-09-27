const displayValue = document.querySelector("#display");
const numButtons = document.querySelectorAll("#button-container > .number");
const operatorButtons = document.querySelectorAll("#button-container > .operator");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
const negButton = document.querySelector('#negative');
const creditButton = document.querySelector("#credit");

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
        let previousDisplayChar = displayValue.textContent.slice(-2).trim();
        if ("+-X/".includes(previousDisplayChar) == false) {
            displayValue.textContent += " " + buttonValue + " ";
        }
    })
})

equalsButton.addEventListener("click", () => {
    displayValue.textContent = calculate(displayValue.textContent);
});

clearButton.addEventListener("click", () => {
    displayValue.textContent = "";
});

deleteButton.addEventListener("click", () => {
    displayValue.textContent = displayValue.textContent.slice(0, -1)
    .trim();
});

negButton.addEventListener("click", () => {
    displayValue.textContent += "-";
});

creditButton.addEventListener("click", () => {
    console.log(displayValue.textContent);
    displayValue.textContent = "80085";
});

function calculate(string) {
    if (string.includes("/")
        || string.includes("X")
        || string.includes("+")
        || string.includes("-")) {
        let arr = string.split(" ");
        let numberOfOperators = arr.filter(x => x == "X" || x == "/" || x == "+" || x == "-").length;
        // console.log("numberOfOperators is " + numberOfOperators);
        for (let i = 0; i < numberOfOperators; i++) {
            // console.log("In the god forsaken for loop. " + i + "st round.");
            if (arr.includes("X") || arr.includes("/")) {
                // console.log("Array includes X or /. Calculating those first.")
                if (arr.indexOf("X") == -1) {
                    // console.log("There is no X in this equation.");
                    arr = calculateChunk("/", arr);
                } else if (arr.indexOf("/") == -1) {
                    // console.log("There is no / in this equation.");
                    arr = calculateChunk("X", arr);
                } else arr = arr.indexOf("X") < arr.indexOf("/") ? calculateChunk("X", arr) : calculateChunk("/", arr);
                // console.log("New array is " + arr);
            }
            else if (arr.includes("+") || arr.includes("-")) {
                // console.log("Array includes + or -. Calculating those now.")
                if (arr.indexOf("+") == -1) {
                    // console.log("There is no + in this equation.");
                    arr = calculateChunk("-", arr);
                } else if (arr.indexOf("-") == -1) {
                    // console.log("There is no - in this equation.");
                    arr = calculateChunk("+", arr);
                } else arr = arr.indexOf("+") < arr.indexOf("-") ? calculateChunk("+", arr) : calculateChunk("-", arr);
                // console.log("New array is " + arr);
            }

        }
        // console.log("Exited loop. Returning array[0], " + arr[0])
        return arr[0];
    }
}

function calculateChunk(operator, array) {
    // console.log("In calculateChunk. Array is " + array + " and operator is " + operator);
    let indexOfOperator = array.indexOf(operator);
    // console.log("indexOfOperator is " + indexOfOperator);
    array[indexOfOperator] = operate(operator, array[indexOfOperator - 1], array[indexOfOperator + 1]);
    // console.log("We attempted to operate the thing at index " + indexOfOperator + ". Now it's " + array[indexOfOperator]);
    array.splice(indexOfOperator + 1, 1);
    array.splice(indexOfOperator - 1, 1);
    // console.log("Modified array we're returning now is " + array);
    return array;
}

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
            if (b == 0) {
                alert("I know what you did.");
                displayValue.textContent = "";
                return;
            }
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

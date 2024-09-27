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
        for (let i = 0; i < numberOfOperators; i++) {
            if (arr.includes("X") || arr.includes("/")) {
                if (arr.indexOf("X") == -1) {
                    arr = calculateChunk("/", arr);
                } else if (arr.indexOf("/") == -1) {
                    arr = calculateChunk("X", arr);
                } else arr = arr.indexOf("X") < arr.indexOf("/") ? calculateChunk("X", arr) : calculateChunk("/", arr);
            }
            else if (arr.includes("+") || arr.includes("-")) {
                if (arr.indexOf("+") == -1) {
                    arr = calculateChunk("-", arr);
                } else if (arr.indexOf("-") == -1) {
                    arr = calculateChunk("+", arr);
                } else arr = arr.indexOf("+") < arr.indexOf("-") ? calculateChunk("+", arr) : calculateChunk("-", arr);
            }

        }
        return arr[0];
    }
}

function calculateChunk(operator, array) {
    let indexOfOperator = array.indexOf(operator);
    array[indexOfOperator] = operate(operator, array[indexOfOperator - 1], array[indexOfOperator + 1]);
    array.splice(indexOfOperator + 1, 1);
    array.splice(indexOfOperator - 1, 1);
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
            console.log("Some kind of wacky thing happened oops.");
    }
}

function add(a, b) {
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

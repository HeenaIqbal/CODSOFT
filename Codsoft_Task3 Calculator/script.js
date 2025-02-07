let currentInput = "";
let operation = null;
let previousInput = "";

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === "") return;
    if (previousInput !== "") {
        calculate();
    }
    operation = op;
    previousInput = currentInput;
    currentInput = "";
}

function calculate() {
    if (currentInput === "" || previousInput === "") return;
    
    let result;
    let num1 = parseFloat(previousInput);
    let num2 = parseFloat(currentInput);
    
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        result = num1 / num2;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = "";
    updateDisplay(currentInput);
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById("display").innerText = value;
}

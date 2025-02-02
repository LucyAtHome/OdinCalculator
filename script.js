// Declaring my operating variables ahead of time:
let num1 = NaN; // Stores the intermediate result
let num2 = NaN; // Stores the second number
let operator = ""; // Stores the current operator

// Math functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) return "You cant divide by 0, idiot!";
    return num1 / num2;
}

// Array to store button presses
let inputArray = [];
const display = document.querySelector(".display");

// Function to handle button clicks
function handleButtonClick(event) {
    // Get the text content of the clicked button
    const buttonValue = event.target.textContent;
    const button = event.target;

    console.log("Input Array:", inputArray);

    // Handle logic for what the buttons do
    if (button.classList.contains("number")) {
        // Behavior for number buttons
        console.log("Number button clicked:", buttonValue);
        inputArray.push(buttonValue);
        updateDisplay();
    } else if (button.classList.contains("operator")) {
        // Behavior for operator buttons
        if (buttonValue === "=") {
            // Handle the equals button
            if (!isNaN(num1) && operator && inputArray.length > 0) {
                num2 = Number(inputArray.join(""));
                const result = performCalculation();
                display.textContent = result;
                num1 = result; // Store the result for chaining
                num2 = NaN;
                operator = "";
                inputArray = [];
            }
        } else if (buttonValue === "C") {
            // Handle the clear button
            console.log("Clear button clicked");
            inputArray = [];
            num1 = NaN;
            num2 = NaN;
            operator = "";
            display.textContent = "";
        } else {
            // Handle other operators (+, -, *, /)
            if (inputArray.length > 0) {
                if (!isNaN(num1)) {
                    // If num1 is already set, perform the previous operation
                    num2 = Number(inputArray.join(""));
                    num1 = performCalculation();
                    num2 = NaN;
                } else {
                    // If num1 is not set, store the current number as num1
                    num1 = Number(inputArray.join(""));
                }
                operator = buttonValue; // Set the new operator
                inputArray = []; // Reset the input array for the next number
                display.textContent = num1; // Show the intermediate result
            }
        }
    }
}

// Function to perform the calculation based on the current operator
function performCalculation() {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
    return NaN; // Fallback for invalid operations
}

// Function to update the display with the current input array
function updateDisplay() {
    display.textContent = inputArray.join(""); // Join the array into a string
}

// Add event listeners to all buttons
document.querySelectorAll(".buttonContainer button").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

//TODO:
// when input array is empty, operators should not function. when num1 is not empty, operators should not function.

//Declaring my operating variables ahead of time:
let num1 = 0;
let num2 = 0;
let operator = ""

//functions
function add(num1, num2) {
	return num1+num2;
};

function subtract(num1, num2) {
	return num1-num2;
};

function multiply(num1, num2) {
	return num1*num2;
};

function divide(num1, num2) {
	return num1/num2;
};

const equals = function(){
    if (operator = add) add(num1,num2);
    if (operator = subtract) subtract(num1,num2);
    if (operator = multiply) multiply(num1,num2);
    if (operator = divide) divide(num1,num2);
}

let inputArray = [];
const display = document.querySelector(".display");
function handleButtonClick(event) {
    // Get the text content of the clicked button
    const buttonValue = event.target.textContent;
    const button = event.target;
    console.log("Input Array:", inputArray);
    //handle logic for what the buttons do 
    if (button.classList.contains("number")) {
        // Behavior for number buttons
        console.log("Number button clicked:", buttonValue);
        inputArray.push(buttonValue);
        updateDisplay();
    } else if (button.classList.contains("operator")) {
        // Behavior for operator buttons
        if (buttonValue === "=") {
            // Handle the equals button
            num2 = Number(display.textContent);
            console.log("Equals button clicked");
            display.textContent = performCalculation();
            inputArray = [];
        } else if (buttonValue === "C") {
            // Handle the clear button
            console.log("Clear button clicked");
            inputArray = [];
            num1 = 0;
            num2 = 0;
            display.textContent = "";
        } else {
            // Handle other operators
            console.log("Operator button clicked:", buttonValue); 
            num1 = Number(display.textContent);
            inputArray = [];            
            operator = buttonValue;
            display.textContent = buttonValue;
        }
    }
}

function performCalculation() {
    if (operator === "+"){
       return add(num1,num2);
    }else if (operator === "-"){
       return subtract(num1,num2);
    }else if (operator === "*"){
       return multiply(num1,num2);
    }else {
       return divide(num1,num2);
    }
} 

// Function to update the display with the current input array
function updateDisplay() {
    display.textContent = inputArray.join(""); // Join the array into a string
}



document.querySelectorAll(".buttonContainer button").forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});


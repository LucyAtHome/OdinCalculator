//TODO:
//functions for the calculator
//Clear
//DOM controlled buttons to activate on click that map to the above functions as well as 0-9 (total 16 buttons)
//Output display box (calculator screen)

//Declaring my operating variables ahead of time:
let num1 = 0
let num2 = 0
let operator = ""

//functions
const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const multiply = function(num1, num2) {
	return num1*num2;
};

const divide = function(num1, num2) {
	return num1/num2;
};

const equals = function(){
    if (operator = add) add(num1,num2);
    if (operator = subtract) subtract(num1,num2);
    if (operator = multiply) multiply(num1,num2);
    if (operator = divide) divide(num1,num2);
}

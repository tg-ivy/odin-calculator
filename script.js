// The 4 basic functions of my calculator

function add(a, b) {
    return a + b;
};
function sub(a, b) {
    return a - b;
};
function mlt(a, b) {
    return a * b;
};
function div (a, b) {
    return a / b;
};


// Variables of operation

let numOne = '';
let numTwo;
let operator;


// Function of operation

function operate(a, b, op) {
    if (op == '+') {
        return add(a, b)
    };
    if (op == '-') {
        return sub(a, b)
    };
    if (op == '*') {
        return mlt(a, b)
    };
    if (op == '/') {
        return div(a, b)
    };    
};

// ------document selectors for buttons and display------

//display
const displayValue = document.getElementsByClassName("display");

displayValue[0].addEventListener("click", () => {
    console.log('Hi William. Stalking my github are you? It really is not anything special you know. You have chicken legs by the way.')
});

// Operator buttons
const btnAdd = document.getElementById("add");
const btnSub = document.getElementById("sub");
const btnMlt = document.getElementById("mlt");
const btnDvd = document.getElementById("dvd");
const btnEquals = document.getElementById("equals");
const btnClear = document.getElementById("clear");

// Number buttons
const btnOne = document.getElementById("one");
const btnTwo = document.getElementById("two");
const btnThree = document.getElementById("three");
const btnFour = document.getElementById("four");
const btnFive = document.getElementById("five");
const btnSix = document.getElementById("six");
const btnSeven = document.getElementById("seven");
const btnEight = document.getElementById("eight");
const btnNine = document.getElementById("nine");
const btnZero = document.getElementById("zero");

//----------Event Listeners for Number Buttons---------
btnOne.addEventListener("click", () => {
    displayValue[0].textContent += '1';
    numOne += '1';
    console.log(numOne)
});
btnTwo.addEventListener("click", () => {
    displayValue[0].textContent += '2';
    numOne += '2';
});
btnThree.addEventListener("click", () => {
    displayValue[0].textContent += '3';
    numOne += '3';
});
btnFour.addEventListener("click", () => {
    displayValue[0].textContent += '4';
    numOne += '4';
});
btnFive.addEventListener("click", () => {
    displayValue[0].textContent += '5';
    numOne += '5';
});
btnSix.addEventListener("click", () => {
    displayValue[0].textContent += '6';
    numOne += '6';
});
btnSeven.addEventListener("click", () => {
    displayValue[0].textContent += '7';
    numOne += '7';
});
btnEight.addEventListener("click", () => {
    displayValue[0].textContent += '8';
    numOne += '8';
});
btnNine.addEventListener("click", () => {
    displayValue[0].textContent += '9';
    numOne += '9';
});
btnZero.addEventListener("click", () => {
    displayValue[0].textContent += '0';
    numOne += '0';
});

// -------- Event Listeners for Operators -----------


btnAdd.addEventListener("click", () => {
    displayValue[0].textContent += '+'
    if (!numTwo) {
        numTwo = numOne
        numOne = '';
        operator = '+';
    }
    else if (numTwo) {
        let result = operate(parseInt(numOne, 10), parseInt(numTwo, 10), operator);
        numTwo = result;
        operator = '+'
    }
})

btnEquals.addEventListener("click", () => {
    let result = operate(parseInt(numOne, 10), parseInt(numTwo, 10), operator);
    displayValue[0].textContent = result;
})
// ----Function for checking Operators in the display----

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
let resultSwitch = false;


// Function of operation

function operate(a, b, op) {
    if (op == '+') {
        return add(b, a)
    };
    if (op == '-') {
        return sub(b, a)
    };
    if (op == '*') {
        return mlt(b, a)
    };
    if (op == '/') {
        return div(b, a)
    };    
};

// ------document selectors for buttons and display------

//display
const displayValue = document.getElementsByClassName("display");
const resultBoxValue = document.getElementById("resultbox");
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
const allNumBtns = document.getElementsByClassName("numbutton");
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
    checkSwitch();
    displayValue[0].textContent += '1';
    numOne += '1';
});
btnTwo.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '2';
    numOne += '2';
});
btnThree.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '3';
    numOne += '3';
});
btnFour.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '4';
    numOne += '4';
});
btnFive.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '5';
    numOne += '5';
});
btnSix.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '6';
    numOne += '6';
});
btnSeven.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '7';
    numOne += '7';
});
btnEight.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '8';
    numOne += '8';
});
btnNine.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '9';
    numOne += '9';
});
btnZero.addEventListener("click", () => {
    checkSwitch();
    displayValue[0].textContent += '0';
    numOne += '0';
});

// -------- Event Listeners for Operators -----------


btnAdd.addEventListener("click", () => {
    displayValue[0].textContent += '+';
    if (!numTwo) {
        numTwo = numOne
        numOne = '';
        operator = '+';
    }
    else if (numTwo) {
        let result = operate(parseFloat(numOne, 10), parseFloat(numTwo, 10), operator);
        numTwo = result;
        numOne = '';
        operator = '+';
    }
    resultSwitch = false;
})

btnSub.addEventListener("click", () => {
    displayValue[0].textContent += '-';
    if (!numTwo) {
        numTwo = numOne
        numOne = '';
        operator = '-';
    }
    else if (numTwo) {
        let result = operate(parseFloat(numOne, 10), parseFloat(numTwo, 10), operator);
        numTwo = result;
        numOne = '';
        operator = '-';
    }
    resultSwitch = false;
})

btnMlt.addEventListener("click", () => {
    displayValue[0].textContent += 'x';
    if (!numTwo) {
        numTwo = numOne
        numOne = '';
        operator = '*';
    }
    else if (numTwo) {
        let result = operate(parseFloat(numOne, 10), parseFloat(numTwo, 10), operator);
        numTwo = result;
        numOne = '';
        operator = '*';
    }
    resultSwitch = false;
})

btnDvd.addEventListener("click", () => {
    displayValue[0].textContent += '÷';
    if (!numTwo) {
        numTwo = numOne
        numOne = '';
        operator = '/';
    }
    else if (numTwo) {
        let result = operate(parseFloat(numOne, 10), parseFloat(numTwo, 10), operator);
        numTwo = result;
        numOne = '';
        operator = '/';
    }
    resultSwitch = false;
})

// Equals
btnEquals.addEventListener("click", () => {
    let result = operate(parseFloat(numOne, 10), parseFloat(numTwo, 10), operator);
    if (result === Infinity) {
        resultBoxValue.textContent = 'ERROR: Cannot divide by 0'
    }
    else if (result == NaN) {
        resultBoxValue.textContent = 'ERROR: Please enter a valid equation'
    }
    else {
        resultBoxValue.textContent = result;
    };
    displayValue[0].textContent = '';
    resultSwitch = true;
});

// Clear
btnClear.addEventListener("click", clear)

// ---------Function to clear and check switch-------------

function clear() {
    resultBoxValue.textContent = '';
    displayValue[0].textContent = '';
    numOne = '';
    numTwo = undefined;
    operator = undefined;
    resultSwitch = false;
}

function checkSwitch() {
    if (resultSwitch == true) {
        resultSwitch = false;
        clear();
    }
    else return
}

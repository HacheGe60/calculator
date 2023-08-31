let num1 = '';
let operator = '';
let num2 = '';
let operation = '';

const viewerEl = document.querySelector('.viewer');
const keysEl = document.querySelectorAll('.key');
const decEl = document.querySelector('.dec');
const plusMinusEl = document.querySelector('.plus-minus');

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    if (b === 0) {
        return 'ERROR';
    }
    return a / b;
};

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
};

keysEl.forEach(key => {

    keysEl.addEventListener('click', () => {
        if ()
            if (operation === '') {
                if (button.textContent === '') {
                    button.addEventListener('click', () => {
                        if (button.textContent === '.' && num1.length <= 9 && !num1.includes('.')) {
                            num1 += '.';
                            viewerEl.textContent = num1;
                        } else if (num1.length <= 9) {
                            if (button.textContent === '.') {
                                num1 += '';
                                return;
                            } else {
                                num1 += button.textContent;
                                viewerEl.textContent = num1;
                            }
                        }
                    });
                } else {
                    button.addEventListener('click', () => {
                        if (button.textContent === '.' && num2.length <= 9 && !num2.includes('.')) {
                            num2 += '.';
                            viewerEl.textContent = num2;
                        } else if (num2.length <= 9) {
                            if (button.textContent === '.') {
                                num2 += '';
                                return;
                            } else {
                                num2 += button.textContent;
                                viewerEl.textContent = num2;
                            }
                        }
                    });
                }
            };
    });
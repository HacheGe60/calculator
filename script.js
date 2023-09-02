let num1 = '';
let num2 = '';
let numA;
let numB;
let result;
let operator = '';
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
    key.addEventListener('click', () => {
        const keyText = key.textContent;

        if (+keyText >= 0 && +keyText <= 9) {
            getNumberClick(keyText);
        } else if (keyText === '.') {
            getDecimalClick();
        } else if (keyText === '+ / -') {
            getPlusMinusClick();
        } else if (keyText === 'CE') {
            getCEClick();
        } else if (keyText === '>>') {
            getBackspaceClick();
        } else if (['+', '-', 'x', '/'].includes(keyText)) {
            getOperatorClick(keyText);
        } else if (keyText === '=') {
            getEqualClick();
        }
    });
});

function getNumberClick(keyText) {
    if (operation === '') {
        num1 += keyText;
        viewerEl.textContent = num1;
    } else {
        num2 += keyText;
        viewerEl.textContent = num2;
    }
}

function getDecimalClick() {
    if (!num1.includes('.') && !num2.includes('.')) {
        if (operation === '') {
            num1 += '.';
            viewerEl.textContent = num1;
        } else {
            num2 += '.';
            viewerEl.textContent = num2;
        }
    }
}

function getPlusMinusClick() {
    if (operation === '') {
        num1 = +num1 * -1;
        viewerEl.textContent = num1;
    } else {
        num2 = +num2 * -1;
        viewerEl.textContent = num2;
    }
}

function getCEClick() {
    num1 = '';
    num2 = '';
    operation = '';
    viewerEl.textContent = '';
}

function getBackspaceClick() {
    if (operation === '') {
        num1 = num1.slice(0, -1);
        viewerEl.textContent = num1;
    } else {
        num2 = num2.slice(0, -1);
        viewerEl.textContent = num2;
    }
}

function getOperatorClick(operator) {
    if (operation !== '') {
        return
    }
    numA = +num1;
    operation = numA + operator;
    num1 = '';
    viewerEl.textContent = '';
    return operator;
}

function getEqualClick() {
    numB = +num2;
    operator = operation.slice(-1);
    result = operate(operator, numA, numB);
    viewerEl.textContent = result;
    num1 = '';
    num2 = '';
    operation = '';
    operator = '';
}
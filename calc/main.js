/* eslint-disable no-unused-vars */
let x = '';
let y = '';
let sign = '';
let finish = false;

const digits = ['0', '1', '2','3','4', '5', '6', '7', '8', '9', ','];
const operation = ['+', '-', 'x', '÷'];

const output = document.querySelector('.input');

function allClean () {
    x = '';
    y = '';
    sign = '';
    finish = false; 
    output.textContent = 0;
}

const AC = document.querySelector('.all-clean');
AC.addEventListener('click', allClean);

function calc (event) {
    if (!event.target.classList.contains('btn')) return;
    if (event.target.classList.contains('all-clean')) return;

    output.textContent = '';
    const key = event.target.textContent;

    if (digits.includes(key)) {
        if (y === '' && sign === '') {
        x += key;
        output.textContent = x;
        } else if (x!== '' && y!=='' && finish) {
            y = key;
            finish = false;
            output.textContent = x;
        } else {
        y += key;
        output.textContent = y;
        }
        return;
    }
    
    if (operation.includes(key)) {
        sign = key;
        output.textContent = sign;
        return;
    }

    if (key === '=') {
        if (y === '') y = x;
        switch (sign) {
            case "+":
                x = (+x) + (+y);
                break;
            case "-":
                x = x - y;
                break;
            case "x":
                x = (x * y);
                break;
            case "÷":
                if (x === '0' || y === '0') {
                    output.textContent = 'Error: Invalid operation';
                    x = '';
                    y = '';
                    sign = '';
                    return;
                }
                x = (x / y).toFixed(2);
                break;
        }
        finish = true;
        output.textContent = x;
    }
}

const buttons = document.querySelector('.buttons');
buttons.addEventListener('click', calc);

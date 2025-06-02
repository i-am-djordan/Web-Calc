const nine = document.getElementById('9');
const eight = document.getElementById('8');
const seven = document.getElementById('7');
const six = document.getElementById('6');
const five = document.getElementById('5');  
const four = document.getElementById('4');
const three = document.getElementById('3');
const two = document.getElementById('2');
const one = document.getElementById('1');
const zero = document.getElementById('0');
const plus = document.getElementById('add');
const minus = document.getElementById('sub');
const multiply = document.getElementById('mul');
const divide = document.getElementById('div'); 
const equal = document.getElementById('equ');
const clear = document.getElementById('AC');
const display = document.getElementById('display');
var td = display;
let sum = 0;

const objs = [];

function addToArray(obj) {
    objs.push(obj);
}

function updateDisplay() {
    td.innerHTML = objs.join('');
}

function addEventListeners() {
    nine.addEventListener('click', () => { addToArray(9); updateDisplay(); });
    eight.addEventListener('click', () => { addToArray(8); updateDisplay(); });
    seven.addEventListener('click', () => { addToArray(7); updateDisplay(); });
    six.addEventListener('click', () => { addToArray(6); updateDisplay(); });
    five.addEventListener('click', () => { addToArray(5); updateDisplay(); });
    four.addEventListener('click', () => { addToArray(4); updateDisplay(); });
    three.addEventListener('click', () => { addToArray(3); updateDisplay(); });
    two.addEventListener('click', () => { addToArray(2); updateDisplay(); });
    one.addEventListener('click', () => { addToArray(1); updateDisplay(); });
    zero.addEventListener('click', () => { addToArray(0); updateDisplay(); });
    
    plus.addEventListener('click', () => { addToArray('+'); updateDisplay(); });
    minus.addEventListener('click', () => { addToArray('-'); updateDisplay(); });
    multiply.addEventListener('click', () => { addToArray('*'); updateDisplay(); });
    divide.addEventListener('click', () => { addToArray('/'); updateDisplay(); });
    
    equal.addEventListener('click', () => {
        if (objs.length > 0) {
            objs.push('=');
            updateDisplay();
        }
        for(i=0; i < objs.length; i++) {
            if (typeof objs[i] == "number") {
                if (typeof objs[i+1] == "string") {
                    if (objs[i+1] == '+') {
                        sum += objs[i];
                    }
                    if (objs[i+1] == '-') {
                        sum -= objs[i];
                    }
                    if (objs[i+1] == '*') {
                        sum *= objs[i];
                    }
                    if (objs[i+1] == '/') {
                        sum /= objs[i];
                    }
                }
            }
        }
        td.innerHTML = sum;
        objs.length = 0;
    });

    clear.addEventListener('click', () => {
        objs.length = 0;
        td.innerHTML = '';
        sum = 0;
    });
}
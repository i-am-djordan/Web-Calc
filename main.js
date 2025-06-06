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
const equals = document.getElementById('equ');
const clear = document.getElementById('AC');
const decimal = document.getElementById('dec');
const display = document.getElementById('display')
const dateTimeDisplay = document.getElementById('dateTime');

function updateDateTime() {
    let now = new Date();
    
    let options = {
        weekday: 'short',
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };

    let formatted = now.toLocaleString('en-US', options);
    dateTimeDisplay.innerHTML = formatted;

    setTimeout(updateDateTime, 1000);
}

updateDateTime();

nine.addEventListener('click', () => display.innerHTML += '9');
eight.addEventListener('click', () => display. innerHTML += '8');
seven.addEventListener('click', () => display. innerHTML += '7');
six.addEventListener('click', () => display. innerHTML += '6');
five.addEventListener('click', () => display. innerHTML += '5');
four.addEventListener('click', () => display. innerHTML += '4');
three.addEventListener('click', () => display. innerHTML += '3');
two.addEventListener('click', () => display. innerHTML += '2');
one.addEventListener('click', () => display. innerHTML += '1');
zero.addEventListener('click', () => display. innerHTML += '0');
plus.addEventListener('click', () => display. innerHTML += '+');
minus.addEventListener('click', () => display. innerHTML += '-');
multiply.addEventListener('click', () => display. innerHTML += '*');
divide.addEventListener('click', () => display. innerHTML += '/');
clear.addEventListener('click', () => display.innerHTML = '');
decimal.addEventListener('click', () => display.innerHTML += '.');

equals.addEventListener('click', () => {
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error) {
        display.innerHTML = 'Error';
    }
});



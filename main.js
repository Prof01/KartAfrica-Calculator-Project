const display = document.getElementById('display');
const ans = document.getElementById('ans');
const operator = document.getElementById('operator');

// GRABING NUMBERS
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const dot = document.getElementById('dot');
// GRABING OPERATORS
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divider = document.getElementById('divider');
const del = document.getElementById('del');
const clear = document.getElementById('clear');
const equal = document.getElementById('equal');
const root = document.getElementById('root');
const square = document.getElementById('square');

let final = 0;
let inputs = '0'

//STATES
let multi = false;
let divide = false;
let doDel = true;

const multiply = (value1, value2) => value1 * value2;
const divideNum = (value1, value2) => value1 / value2;

// OPERATORS
plus.addEventListener('click', () => {
  inputs = inputs.concat(plus.innerText);

  final = multi ? multiply(final, parseFloat(inputs)) : divide ? divideNum(final, parseFloat(inputs)) : final + parseFloat(inputs)
  display.innerHTML = '<span>'+ final +'</span>'
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ '&plus;' +'</span>'

  inputs = ''
  multi = false
  divide = false
  doDel = false;

})

minus.addEventListener('click', () => {
  inputs = inputs.concat(minus.innerText);

  final = multi ? multiply(final, parseFloat(inputs)) : divide ? divideNum(final, parseFloat(inputs)) : final + parseFloat(inputs)
  display.innerHTML = '<span>'+ final +'</span>'
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ '&minus;' +'</span>'

  inputs = '-'
  multi = false
  divide = false
  doDel = false;

})

times.addEventListener('click', () => {
  inputs = inputs.concat(times.innerText);

  final = multi ? multiply(final, parseFloat(inputs)) : divide ? divideNum(final, parseFloat(inputs)) : final + parseFloat(inputs)
  multi = true;
  display.innerHTML = '<span>'+ final +'</span>'
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ '&times;' +'</span>'

  inputs = ''

  divide = false
  doDel = false;

})

divider.addEventListener('click', () => {
  inputs = inputs.concat(divider.innerText);

  final = multi ? multiply(final, parseFloat(inputs)) : divide ? divideNum(final, parseFloat(inputs)) : final + parseFloat(inputs)
  divide = true
  display.innerHTML = '<span>'+ final +'</span>'
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ '&#247;' +'</span>'

  inputs = ''

  multi = false
  doDel = false;

})

del.addEventListener('click', () => {
  inputs = doDel === true ? inputs.slice(0, -1) : inputs;

  display.innerHTML = '<span>'+inputs+'</span>'

})

equal.addEventListener('click', () => {
  inputs = inputs.concat(plus.innerText);

  final = multi ? multiply(final, parseFloat(inputs)) : divide ? divideNum(final, parseFloat(inputs)) : final + parseFloat(inputs)
  display.innerHTML = '<span>'+ final +'</span>'
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ '&equals;' +'</span>'

  inputs = '0'
  final = 0;

  multi = false
  divide = false
  doDel = false;

})

clear.addEventListener('click', () => {
  inputs = '';

  final = 0;

  display.innerHTML = '<span>'+ final +'</span>'
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ '' +'</span>'

  inputs = ''
  final = 0;

  multi = false
  divide = false
  doDel = false;

})

root.addEventListener('click', () => {
  inputs = inputs.concat(root.innerText);

  final = multi ? multiply(final, parseFloat(inputs)) : divide ? divideNum(final, parseFloat(inputs)) : final + parseFloat(inputs)

  display.innerHTML = '<span>'+ 'sqrt('+final+')' +'</span>'
  final = Math.sqrt(final)
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ 'sqrt' +'</span>'

  inputs = '0'

  divide = false
  doDel = false;

});

square.addEventListener('click', () => {
  inputs = inputs.concat(square.innerText);

  final = multi ? multiply(final, parseFloat(inputs)) : divide ? divideNum(final, parseFloat(inputs)) : final + parseFloat(inputs)

  display.innerHTML = '<span>'+ 'sqr('+final+')' +'</span>'
  final = Math.pow(final, 2)
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ 'sqr' +'</span>'

  inputs = '0'

  divide = false
  doDel = false;

});

percent.addEventListener('click', () => {
  inputs = inputs.concat(percent.innerText);

  final = multi ? multiply(final, parseFloat(inputs)) : divide ? divideNum(final, parseFloat(inputs)) : final + parseFloat(inputs)

  final = final / 100
  display.innerHTML = '<span>'+ final +'</span>'
  ans.innerHTML = '<span>'+ final +'</span>'
  operator.innerHTML = '<span>'+ '&#37;' +'</span>'

  inputs = '0'

  divide = false
  doDel = false;

});

// LISTENING TO NUMBERS
zero.addEventListener('click', () => {
    inputs = inputs.concat(zero.innerText);

    display.innerHTML = '<span>'+inputs+'</span>'

    doDel = true;

  })
one.addEventListener('click', () => {
    inputs = inputs.concat(one.innerText);

    display.innerHTML = '<span>'+inputs+'</span>'
    doDel = true;

})

two.addEventListener('click', () => {
  inputs = inputs.concat(two.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

three.addEventListener('click', () => {
  inputs = inputs.concat(three.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

four.addEventListener('click', () => {
  inputs = inputs.concat(four.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

five.addEventListener('click', () => {
  inputs = inputs.concat(five.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

six.addEventListener('click', () => {
  inputs = inputs.concat(six.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

seven.addEventListener('click', () => {
  inputs = inputs.concat(seven.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

eight.addEventListener('click', () => {
  inputs = inputs.concat(eight.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

nine.addEventListener('click', () => {
  inputs = inputs.concat(nine.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

dot.addEventListener('click', () => {
  inputs = inputs.concat(dot.innerText);

  display.innerHTML = '<span>'+inputs+'</span>'
  doDel = true;

})

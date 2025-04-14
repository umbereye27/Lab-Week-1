
// 1.Function Composition
let add = (value) => value + 3;
let multiple = (value) => value * 5;
let  divide  = (value) => value / 2;
let result = divide(multiple(add(4)));
console.log(result);

let cp = (...fns) => value => fns.reduceRight((prev, fn) => fn(prev),value);
let composeResulust = cp(divide,multiple,add)(4);
console.log(composeResulust );


const reverse = str => str.split('').reverse().join('');
const capitalize = str => str.toUpperCase();
let compose = (...fns) => str => fns.reduceRight((preValue,fn) => fn(preValue), str); 
const shoutBackwards = compose(capitalize, reverse);

console.log(shoutBackwards('hello world'));


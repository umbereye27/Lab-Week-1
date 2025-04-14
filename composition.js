
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

// 2. Write a function uniqueElements(arr1, arr2) that takes two arrays and returns a new array with unique elements from both arrays, maintaining the original order

function uniqueElements(arr1, arr2) {
    const seen = new Set([...arr1, ...arr2]);
    console.log(seen);
    return [...seen];
  }
  console.log(uniqueElements([1, 2, 3, 3], [3, 4, 5]));
  

//   3.Create a function that performs a JOIN operation on two arrays of objects, based on a common property, and returns a new array of merged objects.

const employees = [
    { id: 1, name: 'John', department: 'IT' },
    { id: 2, name: 'Jane', department: 'HR' },
    { id: 3, name: 'Doe', department: 'IT' }
    ];
    const salaries = [
    { id: 1, salary: 50000 },
    { id: 2, salary: 60000 },
    { id: 4, salary: 55000 }
    ];
    
    const resul = sqlJoin(employees, salaries);
    console.log(result);
    
// 1.Returns the full name of a person object (given properties firstName and lastName).

function personName(person){
    return `${person.firstName} ${person.lastName}`;
}
console.log(personName({firstName:'Carine', lastName:'UMBEREYE'}))

// 2.Checks if a person is 18 or older (given property age).
function isAdult(person){
    return person.age >= 18 ? 'Yes' : 'No';
}
console.log(isAdult({age:18}))

// 3.ilters an array of person objects to keep only those at least minAge years old

function filterByAge(peaple, minAge){
    return peaple.filter( person => person.age <= minAge )
}

console.log( filterByAge([
    { name: 'Alice', age: 22 },
    { name: 'Bob', age: 17 },
    { name: 'Carine', age: 2 }
  ],18));
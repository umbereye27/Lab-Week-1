// 1.Doubles every number in an array.
const double = (arr) =>{
   return arr.map(value => value*value);

} 
console.log(double([5,3,4,2]));

// 2.Filters out even numbers from an array

function filterEven(arr){
    let filterdValue = arr.filter(value => value % 2 === 0);
    return filterdValue;
}
console.log(filterEven([1,2,4,5,7,8]))

//3. Calculates the sum of all numbers in an array.
function sum(arr){
    let nbrAdditon = arr.reduce((sum,item) => sum += item,0);
    return nbrAdditon ;
}
console.log(sum([1,2,4,]))

// 4.Calculates the average of all numbers in an array.
function average(arr){
    let nbrAdditon = arr.reduce((sum,item) => sum += item,0);
    return arr.length === 0 ? 0 : nbrAdditon / arr.length ;
}
console.log(average([]))


function deleteNth(arr, n) {
    
    const count = {};
    return arr.filter(x => {
      count[x] = (count[x] || 0) + 1;
      return count[x] <= n;
    });
  }
  console.log(deleteNth([2,3,4,1,3,4,3,2,3,2],2))
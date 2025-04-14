// 2. Write a function uniqueElements(arr1, arr2) that takes two arrays and returns a new array with unique elements from both arrays, maintaining the original order 
function uniqueElements(arr1, arr2) { 
    const seen = new Set([...arr1, ...arr2]); 
    console.log(seen); return [...seen]; } 
    console.log(uniqueElements([1, 2, 3, 3], [3, 4, 5]));
     
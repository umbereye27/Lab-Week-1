// 1.capitalize(str): Capitalizes the first letter of a string.

function capitalizeString(word){
    let strLength = word.length;
    let strType = typeof(word)

    if(strLength > 0 & strType === 'string'){
        return word[0].toUpperCase() + word.slice(1);
    }
    else{
        return ` You entered a non-empty string or other type of word`
    }
}
console.log(capitalizeString('Carine'));

// 1. Reverses a string.
const reverseString = (str) =>{
    return str.split('').reverse().join('');
}
console.log(reverseString('my way'));

// 3.Checks if a string is a palindrome (reads the same backward as forward).
function isPalindrome(str) {
    const newStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    return newStr  === newStr.split('').reverse().join('');
  }
  console.log(isPalindrome('dad'));

// 5.snake_case notation.

  function toSnakeCase(str) {
    if (typeof str === 'number') return String(str);
  
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      const lower = char.toLowerCase();
      if (char !== lower && i !== 0) {
        result += '_';
      }
      result += lower;
    }
    return result;
  }
 console.log(toSnakeCase('TestController'));
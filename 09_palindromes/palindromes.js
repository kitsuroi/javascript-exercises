const palindromes = function (string) {

const cleanedString = string
  .toLowerCase()
  .split('')
  .filter(char => /[a-z0-9]/.test(char))
  .join('');
  
const reversedString = cleanedString.split('').reverse().join('');
  
return cleanedString === reversedString;
};


// Do not edit below this line
module.exports = palindromes;

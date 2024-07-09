const sumAll = function(num1, num2) {
  let sum = 0;
  if (num1 < 0 || num2 < 0){
    return "ERROR";
  } else if (typeof num1 != 'number' || typeof num2 != 'number') {
    return "ERROR";
  } else if (num1 > num2) {
    let a = num1;
    num1 = num2;
    num2 = a;
  }
  while (num1 <= num2){
    sum += num1;
    num1++;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

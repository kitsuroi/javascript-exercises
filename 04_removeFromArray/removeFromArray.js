const removeFromArray = function(array, ...arg) {
  for (let i = 0 ; i < arg.length ; i++) {
    let j = 0;
    while( j < array.length) {
      if (array[j] === arg[i]) {
        array.splice(j, 1);
      } else {
        j++;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;

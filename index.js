function sumItems(array) {
  // Sum all the numbers in the array
  let sum = 0;
  for (let item of array) {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
        sum += item;
    }
  }
  return sum;
};

console.log("2nd case",sumItems([[1, 2, [[3], 4]], 5, []]));
console.log("3rd case",sumItems([[[[[[[[[[[[[1]]]]]]]]]]]]]));



module.exports = sumItems;
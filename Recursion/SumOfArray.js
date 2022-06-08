const sumOfArray = (arr) => {
  if (arr.length === 0) return 0;
  let subarr = arr.slice(1);
  return arr[0] + sumOfArray(subarr);
};

console.log(sumOfArray([1, 2, 3])); //6

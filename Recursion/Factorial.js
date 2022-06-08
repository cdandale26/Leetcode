const factorial = (n) => {
  while (n > 0) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  }
  return "no factorial for " + n;
};

console.log("Factorial Solution: " + factorial(5)); // Factorial Solution: 120

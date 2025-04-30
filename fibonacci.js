function fibonacci(numberToCalculate) {
  if (numberToCalculate < 2) {
    return numberToCalculate;
  } else {
    return fibonacci(numberToCalculate - 1) + fibonacci(numberToCalculate - 2);
  }
}

console.log(fibonacci(5));

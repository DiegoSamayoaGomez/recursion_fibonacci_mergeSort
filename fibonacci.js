function fibonacci(numberToCalculate) {
  if (numberToCalculate < 2) {
    return numberToCalculate;
  } else {
    //console.log(numberToCalculate);
    return fibonacci(numberToCalculate - 1) + fibonacci(numberToCalculate - 2);
  }
}
console.log(fibonacci(8));

//ITERATIVE SOLUTION
function fibs(numberToCalculate) {
  let previousNumber = 0;
  let currentNumber = 1;
  let newNumber;
  const myArr = [];

  if (numberToCalculate > 0) {
    if (numberToCalculate === 1) {
      myArr.push(previousNumber);
      return myArr;
    } else if (numberToCalculate === 2) {
      myArr.push(previousNumber);
      myArr.push(currentNumber);
      return myArr;
    } else {
      myArr.push(previousNumber);
      myArr.push(currentNumber);
      for (let index = 0; index < numberToCalculate - 2; index++) {
        newNumber = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = newNumber;
        console.log(newNumber);
        myArr.push(newNumber);
      }
      return myArr;
    }
  } else {
    return "Not allowed here";
  }
}

console.log(fibs(3));

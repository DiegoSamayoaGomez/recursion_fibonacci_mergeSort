function fibonacci(numberToCalculate) {
  if (numberToCalculate < 2) {
    return numberToCalculate;
  } else {
    //console.log(numberToCalculate);
    return fibonacci(numberToCalculate - 1) + fibonacci(numberToCalculate - 2);
  }
}
console.log(fibonacci(8));

// ITERATIVE SOLUTION
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

// RECURSIVE SOLUTION

function fibsRec(
  numberToCalculate,
  previousNumber = 0,
  currentNumber = 1,
  newNumber,
  myArr = []
) {
  // BASE CASES
  //  If the number to calculate is 0, return 0
  if (numberToCalculate === 0) {
    myArr.push(previousNumber);
    return (myArr = [0]);
    //  If the number to calculate is 1, return 0, 1
  } else if (numberToCalculate === 1) {
    return (myArr = [0, 1]);
  } else {
    //console.log("NUMBER TO CALCULATE", numberToCalculate);
    //console.log("PREVIOUS", previousNumber);
    //console.log("CURRENT", currentNumber);
    //console.log("NEW NUMBER", newNumber);
    //console.log("ARR", myArr);

    // If the number to calculate is 2, it will stop
    // Add always 0, 1 because is constant
    // Then add the current array to the new array and return it
    if (numberToCalculate === 2) {
      //console.log("REACHED 2");
      const newArr = [0, 1];
      newArr.push(myArr);
      return newArr.flat();
    } else {
      //If the number to calculate is higher than 2, keep calculating the next value and add it to the array
      newNumber = previousNumber + currentNumber;
      previousNumber = currentNumber;
      currentNumber = newNumber;
      //console.log(myArr);
      myArr.push(newNumber);
      return fibsRec(
        numberToCalculate - 1,
        previousNumber,
        currentNumber,
        newNumber,
        myArr
      );
    }
  }
}

console.log("HERE", fibsRec(10));

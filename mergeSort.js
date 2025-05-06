/*
function orderArr(myArr, leftArr, rightArr) {
  // SINGLE ELEMENT
  const newArr =
    myArr[0] < myArr[1]
      ? (myArr = [myArr[0], myArr[1]])
      : (myArr = [myArr[1], myArr[0]]);
  return newArr;
}

console.log(orderArr([123, 13]));
*/
function mergeSort(myArr) {
  if (myArr.length <= 1) {
    return myArr;
  } else {
    // console.log("MY ARR", myArr);
    // Split in half
    const midArr = Math.floor(myArr.length / 2);

    // Recursive sorts
    const leftArr = myArr.slice(0, midArr);
    const rightArr = myArr.slice(midArr);

    const sortedLeft = mergeSort(leftArr);
    const sortedRight = mergeSort(rightArr);

    //console.log("LEFT", sortedLeft, " || RIGHT", sortedRight);
    // Send the divided arrays into the merge function
    return merge(sortedLeft, sortedRight);
  }
}

function merge(sortedLeft, sortedRight) {
  console.log("SORTED LEFT", sortedLeft);
  console.log("SORTED RIGHT", sortedRight);
  // Create a new array with sorted data
  const newArr = [];

  let i = 0;
  let j = 0;

  // Push item with the lowest value first
  while (i < sortedLeft.length && j < sortedRight.length) {
    if (sortedLeft[i] < sortedRight[j]) {
      newArr.push(sortedLeft[i]);
      i++;
    } else {
      newArr.push(sortedRight[j]);
      j++;
    }
  }

  // Add remainers to the end of the array
  newArr.push(...sortedLeft.slice(i));
  newArr.push(...sortedRight.slice(j));

  return newArr;
}

console.log(mergeSort([12, 8, 9, 11, 3, 3, 5, 4]));

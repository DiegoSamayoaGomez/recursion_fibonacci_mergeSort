function orderArr(myArr, leftArr, rightArr) {
  // SINGLE ELEMENT
  const newArr =
    myArr[0] < myArr[1]
      ? (myArr = [myArr[0], myArr[1]])
      : (myArr = [myArr[1], myArr[0]]);
  return newArr;
}

console.log(orderArr([123, 13]));

function mergeSort(myArr) {
  if (myArr.length <= 1) {
    return;
  } else {
    //Find middle of the array
    const midArr = myArr.length / 2;
    const leftArr = myArr.slice(0, midArr);
    const rightArr = myArr.slice(midArr + 1, myArr.length);

    // Variables used to change position in array
    let i = 0; // left
    let j = 0; // right

    for (i; i < myArr.length; i++) {
      if (i < midArr) {
        leftArr[i] = myArr[i];
      } else {
        rightArr[j] = myArr[i];
        j++;
      }
    }

    mergeSort(leftArr);
    mergeSort(rightArr);
    merge(leftArr, rightArr, myArr);
    return myArr;
  }
}

function merge(leftArr, rightArr, myArr) {
  let leftSize = myArr.length / 2;
  let rightSize = myArr.length - leftSize;
  // Indexes
  let i = 0,
    l = 0,
    r = 0;

  // Check merging conditions
  while (l < leftSize && r < rightSize) {
    if (leftArr[l] < rightArr[r]) {
      myArr[i] = leftArr[l];
      i++;
      l++;
    } else {
      myArr[i] = rightArr[r];
      i++;
      r++;
    }
  }

  // Remaining elements
  while (l < leftSize) {
    myArr[i] = leftArr[l];
    i++;
    l++;
  }
  while (r < rightSize) {
    myArr[i] = rightArr[r];
    i++;
    r++;
  }
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1, 1255]));

function orderArr(myArr, leftArr, rightArr) {
  // SINGLE ELEMENT
  const newArr =
    myArr[0] < myArr[1]
      ? (myArr = [myArr[0], myArr[1]])
      : (myArr = [myArr[1], myArr[0]]);
  return newArr;
}

function largestOfFour(arr) {
  let largeArray = [];

  for (let i = 0; i < arr.length; i++) {
    let large = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > large) large = arr[i][j];
    }
    largeArray.push(large);
  }

  return largeArray;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);

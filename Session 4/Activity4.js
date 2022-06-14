/*
Create a square 2D array with size number of rows and columns and fill it with numbers from 0 to size
Transpose the array (matrix) i.e. Each row becomes a column and each column becomes a row.
Follow the DRY (don't repeat yourself) principle and break your code into functions
printMatrix(arr) - Takes a double dimension array as an argument and prints it
generateMatrix(size) - Generates and returns a matrix of given size
transpose(arr) - Transposes the given matrix arr and returns the transposed matrix
*/

function printMatrix(arr) {
  for (let i = 0; i < arr.length; i++) {
    var str = '';
    for (let j = 0; j < arr.length; j++) {
      str = str + arr[i][j] + '\t';
    }
    console.log(str);
  }
}

// 0 to size values needs to be filled in the 2d array
function generateMatrix(size) {
  let counter = 0;
  const matrix = [];
  for (let i = 0; i < size; i++) {
    // rows
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      // cols
      matrix[i][j] = counter;
      counter++;
    }
  }
  return matrix;
}
// i=0 and j = 0, 1, 2, 3
// i=1 and j = 0, 1, 2, 3
// i=2 and j = 0, 1, 2, 3
// i=3 and j = 0, 1, 2, 3

function transpose(matrix) {
  let canvas = [];
  for (let i = 0; i < matrix.length; i++) {
    // canvas[i] = []
    canvas.push([]); // row
    for (let j = 0; j < matrix.length; j++) {
      canvas[i].push(matrix[j][i]);
    }
  }
  return canvas;
}

//console.log(generateMatrix(4));
//console.log(generateMatrix(2));
//console.log(generateMatrix(6));

// original
const myMatrix = generateMatrix(4);
printMatrix(myMatrix);
console.log(`transposed matrix`);
const transMatrix = transpose(myMatrix);
// transposed matrix
printMatrix(transMatrix);

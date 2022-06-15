//create a matrix, print it and transpose it
function generateMatrix(size) {
  const matrix = [];
  let counter = 0;
  for (let i = 0; i < size; i++) {
    matrix[i] = [];
    for (let j = 0; j < size; j++) {
      matrix[i][j] = counter;
      counter++;
    }
  }
  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let str = '';
    for (let j = 0; j < matrix.length; j++) {
      str = str + matrix[i][j] + '\t';
    }
    console.log(str);
  }
}

function transposeMatrix(matrix) {
  let transpose = [];
  for (let i = 0; i < matrix.length; i++) {
    // transpose.push([]);
    transpose[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      transpose[i][j] = matrix[j][i];
      //transpose[i].push(matrix[j][i]);
    }
  }
  return transpose;
}

const first = generateMatrix(3);
printMatrix(first);
console.log('\n');
let trans = transposeMatrix(first);
printMatrix(trans);

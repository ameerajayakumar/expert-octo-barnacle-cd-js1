let val = 'c';
let answer = '';

switch (val) {
  case '1':
  case 'A':
  case 'a':
    answer = 'alpha';
    break;
  case '2':
  case 'B':
  case 'b':
    answer = 'beta';
    break;
  case '3':
  case 'C':
  case 'c':
    answer = 'gamma';
    break;
  case '4':
  case 'D':
  case 'd':
    answer = 'delta';
    break;
  default:
    answer = 'null';
    break;
}

console.log(answer);

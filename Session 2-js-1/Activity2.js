function getGreekString(val) {
  let answer = '';
  if (val === '1' || val === 'A' || val === 'a') {
    answer = 'alpha';
  } else if (val === '2' || val === 'B' || val === 'b') {
    answer = 'beta';
  } else if (val === '3' || val === 'C' || val === 'c') {
    answer = 'gamma';
  } else if (val === '4' || val === 'D' || val === 'd') {
    answer = 'delta';
  } else return val;
  return answer;
}

let a = getGreekString('da');
console.log(a);

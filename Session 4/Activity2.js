function findLongedWordLength(str) {
  let len = 0;
  let arr = str.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > len) {
      len = arr[i].length;
    }
  }
  return len;
}

console.log(
  findLongedWordLength('A very Long String is 123456789 or thisbutthis')
);

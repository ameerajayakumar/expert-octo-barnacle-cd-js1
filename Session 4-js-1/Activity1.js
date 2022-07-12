let str = 'Hello-world hello';
let s = str.split('');
console.log(s);
s = str.split('o'); // what is passed is ommitted
console.log(s);

let arr = ['a', 'e', 'i', 'o', 'u'];
let joined = arr.join('');
console.log(joined); //aeiou

console.log(arr.reverse());

function palin(str, join) {
  if (str === join) console.log('Palindrome!!');
  else console.log('Not a Palindrome!!!');
}
palin(str, joined);

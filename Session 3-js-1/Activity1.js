const user = {
  fname: 'Luna',
  lname: 'AR',
  age: 13,
  printname: function (f, l) {
    console.log(`${f} ${l}`);
  },
};

const user2 = {};
user2.fname = 'Ameera';

const user3 = new Object();
user3.lname = 'Jayakumar';

console.log(user['fname']);
console.log(user2.fname);
console.log(user3.lname);
user.printname(user2.fname, user3.lname);

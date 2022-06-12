const person = {
  name: 'Naomi',
  jobTitle: 'Doctor',
  email: 'nm@dr.com',
  isVerified: false,
};
console.log(`${person.name} ${person.isVerified}`);

person.isVerified = true;
delete person.name;
person.firstName = 'Bissi';
person.lastName = 'Nessi';

console.log(person);

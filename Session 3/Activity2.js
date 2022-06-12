const person = {
  name: 'Naomi',
  jobTitle: 'Doctor',
  email: 'nm@dr.com',
  isVerified: false,
  moreDescription: { // sub properties of objects can be accessed by chaining together the dot notation & bracket.
    hasInsure: false,
  },
};
console.log(`${person.name} ${person.isVerified}`);

person.isVerified = true; // editing the object
delete person.name; // deleting object
person.firstName = 'Bissi';
person.lastName = 'Nessi';

console.log(person);

//deconstructing an object
const {
  jobTitle,
  email: em,
  moreDescription: { hasInsure },
} = person;
/**
 * person.name,person.email,person.moreDescription.hasInsure
 */
console.log(jobTitle);
console.log(em);
console.log(hasInsure); // nested object

const newUser = person; // copying an object
console.log(newUser);
newUser.name = 'Ameera';
console.log(newUser);

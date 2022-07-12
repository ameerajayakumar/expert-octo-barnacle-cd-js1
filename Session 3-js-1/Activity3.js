const userDetails = {
  name: {
    first: 'ameera',
    last: 'J',
  },
  jobtitle: 'JS learner',
  email: {
    work: 'fghbnm@ghn.com',
    personal: 'idontknow@gmail.com',
  },
  status: {
    isonline: true,
    isverified: false,
  },
};

userDetails.isProMember = false;

console.log(userDetails);

const {
  name: { first },
  name: { last: lname },
  jobtitle,
} = userDetails;
console.log(first);
console.log(lname);

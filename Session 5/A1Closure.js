function isValidPayload(files) {
  const restrictedFileExt = ['exe', 'zip']; //makes it inaccessible outside the function
  //All the check functions here

  function getCheckResult() {
    let validity = false;
    for (let i = 0; i < files.length; i++) {
      let a = files[i].split('.')[1];
      console.log(a);
      if (restrictedFileExt.includes(a)) {
        validity = true;
        break;
      }
    }
    return validity;
  } //returns true/false depending on value returned by checks.

  return getCheckResult; //returning the getCheckResult() value.
}

let val = isValidPayload(['a.jpg', 'b.png', 'c.pdf', 'd.zippy']);
console.log(val());

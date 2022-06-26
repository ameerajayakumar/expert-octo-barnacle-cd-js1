/**
 * Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. A numeronyms is generated by taking the first and the last letter and counting the number of letters in between.
Words that have less than 4 letters aren't abbreviated, because that would be just odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e
const input = 'Every developer likes to mix kubernetes and javascript';
//'E3y d7r l3s to mix k8s and j8t'
Write two functions
createNumeronym (str) ⇒ takes in a string and returns the corresponding numeronym string for it.

 */
function createNumeronym(str) {
  let arr = str.split(' ');
  console.log(arr);
 let newStr = arr.reduce((strAns, item) =>{
    if(item.length > 3){
        return `${strAns} ${item.charAt(0)}${item.length-2}${item.charAt(item.length - 1)}`;
    }
    else{
        return `${strAns} ${item}`;
    }

  },"")
  return newStr;
}
const input = 'Every developer likes to mix kubernetes and javascript';

 console.log(createNumeronym(input));


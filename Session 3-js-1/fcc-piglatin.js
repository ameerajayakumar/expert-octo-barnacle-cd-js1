function translatePigLatin(str) {
  /**
  * Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end.
translatePigLatin("california") should return the string aliforniacay.

translatePigLatin("paragraphs") should return the string aragraphspay.

translatePigLatin("glove") should return the string oveglay.

translatePigLatin("algorithm") should return the string algorithmway.

translatePigLatin("eight") should return the string eightway.

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return the string artzschway.

Should handle words without vowels. translatePigLatin("rhythm") should return the string rhythmay.
  */

  let consta = [];
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let ch;
  let newword;
  let warray = str.toLowerCase().split('');

  if (vowels.includes(warray[0])) {
    return warray.join('') + 'way';
  }
  for (ch in warray) {
    if (!vowels.includes(warray[ch])) {
      consta.push(warray[ch]);
    } else {
      newword = warray.splice(ch).join('') + consta.join('') + 'ay';
      return newword;
      // break;
    }
  }
  return consta.join('') + 'ay';
}

console.log(translatePigLatin('schwartz'));

const numberOfVowels = function(data) {
  let vowel = 'aeiou';
  let count = 0;
  for(let i = 0; i < data.length; i++) {
   if(vowel.indexOf(data[i]) >= 0) count ++; 
  }
  return count;
};
console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
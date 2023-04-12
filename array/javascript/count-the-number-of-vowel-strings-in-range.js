var vowelStrings = function (words, left, right) {
  let numberOfVowels = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = left; i <= right; i++) {
    let start = words[i].slice(0, 1);
    let end = words[i].slice(-1);
    if (vowels.includes(start) && vowels.includes(end)) {
      numberOfVowels++;
    }
  }
  return numberOfVowels;
};

var longestPalindrome = function (s) {
  let longest = '';
  for (let i = 0; i < s.length; i++) {
    let oddPal = getPalindrome(s, i, i);
    let evenPal = getPalindrome(s, i, i + 1);
    let pal = oddPal.length > evenPal.length ? oddPal : evenPal;
    if (pal.length > longest.length) {
      longest = pal;
    }
  }
  return longest;
};

function getPalindrome(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return s.slice(left + 1, right);
}

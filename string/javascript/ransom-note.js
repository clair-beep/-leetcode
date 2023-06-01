var canConstruct = function (ransomNote, magazine) {
  function mapping(string) {
    let map = {};
    for (let char of string) {
      map[char] = map[char] + 1 || 1;
    }
    return map;
  }

  if (ransomNote.length > magazine.length) {
    return false;
  }

  let ransomNoteMap = mapping(ransomNote);
  let magazineMap = mapping(magazine);

  for (let num in ransomNoteMap) {
    if (ransomNoteMap[num] > magazineMap[num] || !magazineMap[num]) {
      return false;
    }
  }

  return true;
};

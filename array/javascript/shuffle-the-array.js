var shuffle = function (nums, n) {
  let firstElement = 0;
  let secondElement = n;
  let index = 0;
  let result = new Array(nums.length);
  while (firstElement < n) {
    result[index] = nums[firstElement];
    index++;

    result[index] = nums[secondElement];
    index++;

    firstElement++;
    secondElement++;
  }
  return result;
};

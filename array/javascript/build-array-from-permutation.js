var buildArray = function (nums) {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let realIndex = nums[i];
    result.push(nums[realIndex]);
  }
  return result;
};

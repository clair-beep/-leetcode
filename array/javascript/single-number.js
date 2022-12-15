
var singleNumber = function(nums) {
    let numMap = {}
    let unique = 0
    for(let num of nums) {
        numMap[num] = numMap[num] + 1 || 1
    }
  console.log(numMap)
    for(let num in numMap) {
      if(numMap[num] < 2) {
        return num
      }
    }
};
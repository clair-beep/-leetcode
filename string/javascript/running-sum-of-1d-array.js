var runningSum = function(nums) {
    // loop 
    let sum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
     
      sum.push(sum[i - 1] + nums[i])
    }
    // sum each iterance 
    //push construct 
    //return
    return sum
  };
  
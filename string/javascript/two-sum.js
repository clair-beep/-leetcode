//arr of nums, tarsget, return the indices of the num that add up to the target
 // [1,2,3,4,5] - 9  => 3, 4

 // arr of nums - not empty, all nums, whole, positive, at least two , num + self will never equal target (only two nums)
// return indices of the nums that add up to the target -> []

 // [1,2,3,4,5] - 9  => [3, 4]
// [5, 6,9], 11 => [0,1 ]
// [22, 7, 100, 5], 12 => [1,3]

var twoSum = function(nums, target) {

    // grab a num
    for(let i=0; i < nums.length; i++) {
        //comparing outside num to internal nums 
        for(let k =0; k< nums.length; k++ ) {
            if(nums[i] + nums[k]  === target && i !== k) {
                return[i, k]
            }
        }
    }
};
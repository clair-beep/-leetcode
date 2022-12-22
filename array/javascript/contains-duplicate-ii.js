var containsNearbyDuplicate = function(nums, k) {
    const hasmap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (i - hasmap.get(nums[i]) <= k) {
            return true;
        }
        hasmap.set(nums[i], i);
    }
    return false;
};
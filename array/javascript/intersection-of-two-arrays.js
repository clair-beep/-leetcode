var intersection = function(nums1, nums2) {
    let st1 = new Set(nums1);
    let st2 = new Set(nums2);

    let ans = [];
    
    st1.forEach(c => {
        if (st2.has(c)) {
            ans.push(c);
        }
    })
    
    return ans;
};
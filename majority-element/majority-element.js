/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let cache = {};
    
    for (let i = 0; i < nums.length; i++) {
        cache[nums[i]] = (cache[nums[i]] || 0) + 1
    }
    
    for (let key in cache) {
        if (cache[key] >= nums.length / 2) {
            return key;
        }
    }
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isIdealPermutation = function(nums) {
    
    for(let i = 0; i < nums.length; i++) {
        const diff = Math.abs(i - nums[i]);
        if(diff > 1) return false;
    }
    return true;
};
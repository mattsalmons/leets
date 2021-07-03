/**
 * @param {number[]} nums
 * @return {number}
 */

// input: array of nums
// output: integer representing the largest sum of a contiguous subarray within nums
// edge:
//  - nums is empty return null
//  - nums length is 1 return the only val
// constraints:
//  - O(n)
//  - try divide and conquer

// approach:
//  - handle edge cases
//  - init sum
//  - init max
//  - iterate over nums
//      - set sum equal to sum plus current num OR current num (largest)
//      - set max equal to sum or max
//  - return max

var maxSubArray = function(nums) {
    if (!nums) return null;
    if (nums.length === 1) return nums[0];
    
    let [sum, max] = [nums[0], nums[0]]
    
    for (let i = 1; i < nums.length; i++) {
        sum = Math.max(nums[i], sum + nums[i]);
        max = Math.max(sum, max);
    }
    
    return max;
};
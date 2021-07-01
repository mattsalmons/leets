/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// - input:
//   - array of sorted nums
//   - target num
// - output:
//   - index of target num
//      - if target is not. found, return index of where target would fall within sorted array
// - constraints:
//   - must run in O(log n) time complexity
// - edge cases:
//   - if nums array is empty return 0
//   - if target is bigger than last num in input array retun nums.length
// - approach:
//   - handle edge cases
//   - iterate over nums
//      - if current num equals target of next num is larger than target, return index

var searchInsert = function(nums, target) {
    let length = nums.length
    
    if (!nums.length) return 0;
    if (target > nums[length - 1]) return length;
    
    for (let i = 0; i < length; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i;
        }
    }
};
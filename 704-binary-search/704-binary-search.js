/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// input:
//  -sorted array of nums
//  -target num
// output:
//  -index of target num in nums array
//  -if not found, return -1
// constraints:
//  -use binary search
// edge cases:
//  -target is not a number return 'invalid target'
// approach:
//  -init left, mid, right
//  -declare midFinder helper
//  -iterate over nums array while left is less than right
//      -if nums at mid index is target, return mid index
//      -if nums at mid index is larger than target
//          -reassign right and mid
//              -otherwise
//          -reassign left and mid
//  -return -1 (only happens if target !== mid during loop)

var search = function(nums, target) {
    let [left, right] = [0, nums.length - 1];
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) return mid;
        if (target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }
    
    return -1;
};
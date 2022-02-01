/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// input:
//  - sorted array of distinct num
//  - target value
// output:
//  - the index of target OR where target should be
// constraints// constraints:
//  - must be O(log n) (binary search)
// edge:
//  - if target is smaller than first or larger than la

// approach:
//  - init left, right
//  - iterate while left is less or equal to right
//      - init mid
//      - if target is nums at mid return mid
//      - if target less than nums at mi
//          - reassign right to mid - 1
//      - if target is greater than nums at mid
//         - reassign left to mid - 1
//  - return left    

var searchInsert = function(nums, target) {
    if (target < nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length
    
    let left = 0;
    let right = nums.length - 1;
    let mid;
    
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (target === nums[mid]) return mid;
        if (target < nums[mid]) right = mid - 1;
        else left = mid + 1;
    }
    
    return left;
};
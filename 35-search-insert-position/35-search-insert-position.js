/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// input:
//  - sorted array of distinct nums
//  - target value
// output:
//  - the index of target OR where target should be
// constraints:
//  - must be O(log n) (binary search)
// edge:
//  - if target is smaller than first or larger than last

// approach:
//  - init left, right
//  - iterate while left is less than right
//      - init mid
//      - if target is nums at mid return mid
//      - if target less than nums at mid
//          - reassign right to mid - 1
//              - if target is greater than nums at right 
//                  - return right
//      - if target is greater than nums at mid
//         - reassign left to mid - 1
//              - if target is smaller than nums at left
//                  - return left

var searchInsert = function(nums, target) {
    let left = 0, right = nums.length - 1;
    if (target > nums[right]) {
        return nums.length;
    }
    if (target < nums[left]) {
        return 0;
    }
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
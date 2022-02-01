/**
 * @param {number[]} nums
 * @return {number[]}
 */

// input: sorted array of nums
// output: sorted array of squares of each val in input array
// constraints: O(n) time
// edge cases:
//  - nums length is one

// approach:
//  -
var sortedSquares = function(nums) {
    let result = [];
    
    let left = 0;
    let right = nums.length - 1;
    let l, r;
    
    for (let i = nums.length - 1; i >= 0; i--) {
        l = nums[left] ** 2;
        r = nums[right] ** 2;
        if (l >= r) {
            result[i] = l;
            left++;
        } else {
            result[i] = r;
            right--;
        }
    }
    return result;
};

// [16, 1, 0, 9, 100]
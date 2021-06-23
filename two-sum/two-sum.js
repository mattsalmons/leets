/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// input: 
//  - array of numbers
//  - target number
// output:
//  - two indices of the numbers that add up to the target
// approach:
//
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[i] + nums[j] === target) {
              return [i, j]
          }
      }
  }
};
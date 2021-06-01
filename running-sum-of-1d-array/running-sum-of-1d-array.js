/**
 * @param {number[]} nums
 * @return {number[]}
 */

// input:
//  - array of nums
// output:
//  - array of nums where each num is the running sum of nums in the input array
// edge cases:
//  - empty input - return null
// approach:
//  - init empty results array
//  - init sum variable at 0
//  - iterate over input
//      - add current to sum
//      - push new sum into results array
//  - return results

var runningSum = function(nums) {
    let results = [];
    let sum = 0
    
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        results.push(sum);
    }
    
    return results;
};
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
    
    for (let num of nums) {
        result.push(num ** 2);
    }
    
    return result.sort((a, b) => a - b);
};
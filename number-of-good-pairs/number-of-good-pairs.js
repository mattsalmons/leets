/**
 * @param {number[]} nums
 * @return {number}
 */

// input:
//  - array of nums
// output:
//  - integer representing the number of 'good' pairs
// approach:
//  - create goodPairsCounter variable
//  - iterate over nums
//      - for each val iterate over rest of input
//          - if nums at i equals nums at j
//              - increment counter
//  - return counter
var numIdenticalPairs = function(nums) {
    let goodPairsCount = 0;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                goodPairsCount++
            }
        }
    }
    
    return goodPairsCount;
};
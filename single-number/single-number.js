/**
 * @param {number[]} nums
 * @return {number}
 */
// input:
//  - array of integers containing all duplicates except one
// output:
//  - non duplicate integer found in input array
// constraints:
//  - must be On time and O1 space
// approach:
//  - sort input
//  - iterate over nums by 2
//      - if next does not equal current
//          - return current
var singleNumber = function(nums) {
    let count = {};
    for (let i = 0; i < nums.length; i++) {
        count[nums[i]] = (count[nums[i]] || 0) + 1;
    }
    
    for (let key in count) {
        if (count[key] === 1) {
            return key;
        }
    }
};
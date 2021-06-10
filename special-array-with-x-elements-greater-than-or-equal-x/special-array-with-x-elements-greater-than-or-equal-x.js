/**
 * @param {number[]} nums
 * @return {number}
 */

// input: array of nums
// output:
//  - if nums is special: integer (x) representing how many values in nums array are greater than or equal to x
//  - otherwise -1 is returned
// approach:
//  - init x at 0
//  - init counter at 0
//  - while x less than nums length
//      - iterate over nums
//          - if current num is greater than or equal to x
//              - increment counter
//              - increment x
//  - if x is same as counter
//      - return x
//          - otherwise
//      - return -1
var specialArray = function(nums) {
    for (let i = 1; i <= nums.length; i++) {
        let cnt = 0;
        for (const item of nums) {
            if (item >= i) {
                cnt++;
            }
        }
        if (cnt === i) return cnt;
    }
    return -1;
};
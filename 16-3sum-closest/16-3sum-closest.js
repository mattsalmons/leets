/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// input:
//  - array of nums
//  - target sum
// output:
//  - sum of three values found in nums that is closest to target
// constraints:
//  - none
// edge cases:
//  - none:

// approach:
//  - sort nums
//  - init closest at infinity
//  - iterate using for loop as long as i is less than length - 2
//      - init left at next, right and end of nums
//      - while left is smaller than right
//          - save total of all three numbers
//          - if total is closer to target than closest
//              - reassign closest to total
//          - if total is less than target
//              - increment left
//          - otherwise
//              - decrement right
//  - return closest

var threeSumClosest = function(nums, target) {
    let sortedNums = nums.sort((a, b) => a - b);
    let closest = Infinity;
    
    for (let i = 0; i < sortedNums.length - 2; i++) {
        let left = i + 1;
        let right = sortedNums.length - 1;
        
        while (left < right) {
            const total = sortedNums[left] + sortedNums[right] + sortedNums[i];
            if (total === target) return target;
            
            closest = Math.abs(target - closest) < Math.abs(target - total) ? closest : total
            
            if (total < target) left++;
            else right--;
        }
    }
    
    return closest;
};
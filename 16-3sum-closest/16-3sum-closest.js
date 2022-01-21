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
//  - iterate using for loop as long as i is less than length - 2
//  - init left, right
//  - init sum at left + right + current val

//  - return sum
var threeSumClosest = function(nums, target) {
    let sortedNums = nums.sort((a, b) => a - b);
    let closest = Infinity;
    
    for (let i = 0; i < sortedNums.length - 2; i++) {
        let left = i + 1;
        let right = sortedNums.length - 1;
        
        while (left < right) {
            const total = sortedNums[left] + sortedNums[right] + sortedNums[i];
            if (total === target) return target;
            
            if (Math.abs(target - closest) > Math.abs(target - total)) {
                closest = total;
            }
            
            if (total < target) {
                left++;
            } else { 
                right--;
            }
        }
    }
    
    return closest;
    
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */

// input:
//  - array of numbers
// output:
//  - array of numbers whose values each indicate the number
//    of values in the original array that are small than the current value
// approach:
//  -init resuts array
//  - iterate over nums
//      - init counter at 0
//      - for each val, iterate over nums again
//          - if nums[j] is smaller than nums[i], increment count
//      - push count into results array
//  - return results

var smallerNumbersThanCurrent = function(nums) {
    let results = [];
    for (let i = 0; i < nums.length; i++) {
        let counter = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                counter++
            }
        }
        results.push(counter);
    }
    
    return results;
};
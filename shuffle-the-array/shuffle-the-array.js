/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

// input
//  - array of integers with length 2n
//  - number representing half the length on input array
// output
//  - shuffled array (x1, y1, ...)
// approach
//  - create results array
//  - split input into two arrays with n length
//  - iterate over one
//      - push value at current index of each array into results
//  - return results

var shuffle = function(nums, n) {
    let results = [];
    let x = nums.slice(0, n);
    let y = nums.slice(n);
    
    for (let i = 0; i < x.length; i++) {
        results.push(x[i], y[i]);
    }
    
    return results;
};
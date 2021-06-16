/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    const decoded = [];
    
    for (let i = 0; i < nums.length - 1; i += 2) {        
        for (let j = 0; j < nums[i]; j++) {
            decoded.push(nums[i + 1]);
        }
    }
    
    return decoded;
};
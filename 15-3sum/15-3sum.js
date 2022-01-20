/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function(nums) {
    let triplets = [];
    
    const sortedArr = nums.sort((a, b) => a - b);
    
    for (i = 0; i < sortedArr.length - 2; i++) {
        
      // if (sortedArr[i] > 0) {
      //   break;
      // }
        
      if (i > 0 && sortedArr[i] === sortedArr[i - 1]) {
        continue;
      }
        
      let start = i + 1;
      let end = sortedArr.length - 1;
        
      while (start < end) {
        const sum = sortedArr[i] + sortedArr[start] + sortedArr[end];
        if (sum < 0) {
          start++;
        } else if (sum > 0) {
          end--;
        } else {
          triplets.push([sortedArr[i], sortedArr[start], sortedArr[end]]);
            
          while (start < end && sortedArr[start] === sortedArr[end + 1]) {
            start++;
          }
          while (start < end && sortedArr[end] === sortedArr[end - 1]) {
            end--;
          }
          start++;
          end--;  
        }
      }
    }
    return triplets;
};
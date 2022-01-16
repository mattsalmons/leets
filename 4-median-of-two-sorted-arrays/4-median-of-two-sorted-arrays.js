/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    

  
    if (merged.length % 2) return merged[Math.floor(merged.length / 2)];
  
    return (merged[Math.floor(merged.length / 2) - 1] + merged[Math.floor(merged.length / 2)]) / 2;
};
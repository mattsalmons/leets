/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    
    var half = Math.floor(merged.length / 2);
  
    if (merged.length % 2) return merged[half];
  
    return (merged[half - 1] + merged[half]) / 2;
};
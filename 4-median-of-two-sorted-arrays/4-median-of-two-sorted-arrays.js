/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1.concat(nums2).sort((a, b) => a - b);
    let sorted = merged.sort((a, b) => a - b);
    
    var half = Math.floor(sorted.length / 2);
  
    if (sorted.length % 2) return sorted[half];
  
    return (sorted[half - 1] + sorted[half]) / 2;
};
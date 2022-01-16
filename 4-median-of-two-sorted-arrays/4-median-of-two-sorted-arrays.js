/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let merged = nums1
        .concat(nums2)
        .sort((a, b) => a - b);
    
    let mid = Math.floor(merged.length / 2);
    
    return merged.length % 2 ? merged[mid] : (merged[mid - 1] + merged[mid]) / 2
};
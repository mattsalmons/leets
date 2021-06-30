/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// input:
//  - string (haystack)
//  - string (needle) to find within haystack
// output:
//  - index of start of needle within haystack
// approach:
//  - iterate over haystack
//      - if current char is same as first char of needle
//          - iterate over needle
//              - if current needle char is same as 
var strStr = function(haystack, needle) {
    return haystack.includes(needle) ? haystack.indexOf(needle) : -1
};
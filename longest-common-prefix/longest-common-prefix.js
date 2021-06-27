/**
 * @param {string[]} strs
 * @return {string}
 */

// input:
//  - array of strings
// output:
//  - string of most common prefix present in input array
// approach:
//  - create result variable, set to empty string
//  - iterate over input array
//      - if string[i][0] is same as string[i + 1][0]
//          - contatinate result
//  - return result string
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return '';
    let result = '';
    
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i]) return result;
        }
        
        result += strs[0][i];
    }
    
    return result;
};
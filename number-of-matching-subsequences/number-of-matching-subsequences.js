/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

// input:
//  - string
//  - array of strings
// output:
//  - number of strings found in the input array that could
//    make up the input string;
// approach:
//  - init counter
//  - iterate over words
//      - init i, j vars
//      - while i is less than words and j is less than string
//          - if (word[j] === s[i])
//              - increment i, j
//          - otherwise
//              - increment i
//  - if j equals string length
//      - return counter;

var numMatchingSubseq = function(s, words) {
    let count = 0
    for (let word of words) {
        let i = 0, j = 0
        while (j < word.length && i < s.length) {
            if (word[j] === s[i]) {
                j++
                i++
            } else {
                i++
            }
        }
        if (j === word.length) {
            count++
        }    
    }
    return count
};
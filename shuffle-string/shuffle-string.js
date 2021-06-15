/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
// input:
//  - string
//  - array on indices
// output:
//  - shuffled string
// approach:
//  - map over indices
//      - return string at value
var restoreString = function(s, indices) {
    let result = [];
    indices.forEach((num, i) => {
        result[num] = s[i];
    })
    return result.join('');
};



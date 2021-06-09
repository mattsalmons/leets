/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// input:
//  - two strings, one representing a collection of jewles, one representing the stones you have
// output:
//  - integer represing the number of jewels your stones contain
// approach:
//  - intit jewelsCount variable
//  - iterate over jewles
//      - if stones contains current char
//          - increment counter
//  - return counter
var numJewelsInStones = function(jewels, stones) {
    let jewelsCount = 0;
    
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            jewelsCount++
        }
    }
    return jewelsCount;
};
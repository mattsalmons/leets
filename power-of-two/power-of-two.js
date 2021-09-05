/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n < 1) return false;
    if (n <= 2) return true;
    
    return n > 0 && 1073741824 % n === 0;
    
};
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x = x.toString();
    let reversed = x.split('').reverse().join('');
    if (reversed === x) {
        return true;
    }
    
    return false;
};
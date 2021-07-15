/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let r = s.toLowerCase()
        .replace(/[^0-9a-z]/gi, '')
        .split('')
        .reverse()
        .join('');
    
    s = s.toLowerCase()
        .replace(/[^0-9a-z]/gi, '');
        
    
    return s === r;
}
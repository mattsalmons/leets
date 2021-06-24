/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let isNegative = false;
    if (x < 0) {
        x = Math.abs(x);
        isNegative = true;
    }
    x = x.toString();
    let reversed = '';
    
    for (let i = x.length - 1; i >= 0; i--) {
        reversed += x[i];
    }
    
    let result = Number(reversed)
    
    if (isNegative) {
        result = -result;
    }
    
    if (result > -(2 ** 31) && result < 2 ** 31 - 1) {
        return result;
    }
    
    return 0;
};
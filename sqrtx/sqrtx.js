/**
 * @param {number} x
 * @return {number}
 */

// input: positive integer
// output: truncated square root of input
// constraints: no built in exponent funcs or operators (**)
// edge cases: no x return null
// approach:
//  - handle edge case
//  - 
var mySqrt = function(x) {
    return Math.trunc(Math.sqrt(x))
};
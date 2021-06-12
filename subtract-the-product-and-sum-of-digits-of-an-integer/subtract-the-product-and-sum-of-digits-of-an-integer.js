/**
 * @param {number} n
 * @return {number}
 */

// input:
//  - positive integer
// output:
//  - number representing the difference between the sum and product
//    of digits of input number
// appraoch:
//  - init sum and product vars
//  - split n into individual digits
//  - iterate over digits
//      - calulate product and sum
//  - return difference

var subtractProductAndSum = function(n) {
    let sum = 0;
    let product = 1;
    let digits = n.toString();
    for (let i = 0; i < digits.length; i++) {
        sum += Number(digits[i]);
        product *= Number(digits[i]);
    }
    
    console.log('p:', product);
    console.log('s:', sum)
    
    return product - sum;
};
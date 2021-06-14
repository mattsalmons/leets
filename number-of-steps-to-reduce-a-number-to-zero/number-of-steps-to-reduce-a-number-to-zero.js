/**
 * @param {number} num
 * @return {number}
 */

// input:
//  - positive integer
// output:
//  - number of steps required to reduce input num to 0
// approach:
//  - init counter at 0;
//  - if num is 0
//      - return counter
//  - if num is even
//      - incremement counter
//      - invoke numberOfSteps on num divided by 2
//          - otherwise
//      - increment counter
//      - invoke numberOfSteps on num minus 1
var numberOfSteps = function(num, counter) {
    counter = counter || 0;
    
    if (num === 0) {
        return counter;
    }
    
    if (num % 2 === 0) {
        counter++;
        return numberOfSteps(num / 2, counter)
    }
    if (num % 2 !== 0) {
        counter++;
        return numberOfSteps(num - 1, counter);
    }
};
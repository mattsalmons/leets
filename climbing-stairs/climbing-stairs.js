/**
 * @param {number} n
 * @return {number}
 */


var climbStairs = function(n) {
    if (n < 3) return n;
    
    let storage = [1, 2, 3];
    
    for (let i = 3; i < n; i++) {
        storage.push(storage[i - 1] + storage[i - 2])
    }
    
    return storage.pop();
};
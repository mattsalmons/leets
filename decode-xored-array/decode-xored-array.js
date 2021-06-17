/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    const arr = [first];
    
    encoded.forEach((value, index) => {
        arr.push(arr[index] ^ value);
    })
    
    return arr
};
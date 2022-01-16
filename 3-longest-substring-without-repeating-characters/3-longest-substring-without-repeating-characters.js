/**
 * @param {string} s
 * @return {number}
 */

// input:
//  - string of letters
// output:
//  - integer representing the length of the longest substring contained within the input that has no repeated chars
// edge cases:
//  - empty string return 0
// approach:
//  - handle edge case
//  - init current, next pointers
//  - init currentLength
//  - init longest
//  - while current is less than next and next is less than length of input
//      - if s at current index is not the same as at next
//          - increment currentLength and next
//          - update longest to max of longest and currentlength
//      - if s at current is same as at next
//          - set currentLength to one
//          - increment current and next
//          - update longest
//  return longest

//   let longestStr = '';
//   let currentStr = '';

//   for(let i = 0; i < s.length; i++) {
//     let letter = s[i];
//     let index = currentStr.indexOf(letter);

//     if(index > -1) {
//       if(currentStr.length > longestStr.length) longestStr = currentStr;
//       currentStr = currentStr.slice(index + 1) + letter;
//     }
//     else {
//       currentStr += letter;
//     }
//   }
//   if(currentStr.length > longestStr.length) longestStr = currentStr;
//   return longestStr.length;

var lengthOfLongestSubstring = function(s) {
    let current = '';
    let longest = '';
    
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        let index = current.indexOf(letter);
        
        if (index > -1) {
            if (current.length > longest.length) {
                longest = current;
            }
            current = current.slice(index + 1) + letter;
        } else {
            current += letter;
        }
    }
    
    if (current.length > longest.length) {
        longest = current;
    }
    
    return longest.length;
};
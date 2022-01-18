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
//  init current, longest as empty strings
//  iterate over input
//      create alias for current letter
//      init index, assign as location of current letter in current string
//      if current letter is not in current string
//          add current letter to current string
//              otherwise
//          if current string length is greater than longest string length
//              reassign longest string to current string
//              reassign current string to equal a slice of previous current string starting                   from index after found letter, concatinate current letter
//      if current string length is greater than longest string length
//          reassign longest string to current string
//      return longest string length

var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    
    let [current, longest] = ['', ''];
    
    for (let i = 0; i < s.length; i++) {
        let letter = s[i];
        let index = current.indexOf(letter);
        
        if (index === -1) current += letter;
        else {
            if (current.length > longest.length) longest = current;
            current = current.slice(index + 1) + letter;
        }
        if (current.length > longest.length) longest = current;
    }
    console.log(longest);
    return longest.length;
}
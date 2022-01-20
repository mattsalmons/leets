/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// input: two strings
// output: boolean representing if two input strings are anagrams of eachother
// constraints: O(n)
// edge cases: spaces? special chars?

// approach:
//  - use object to count chars in each string (helper function)
//  - compare both objects
//      - if keys or values are different
//          - return false
//  - return true
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const countChars = str => {
        let charMap = {};
        
        for (let char of str) {
            charMap[char] = charMap[char] + 1 || 1;
        }
        
        return charMap;
    }
    
    const sMap = countChars(s);
    const tMap = countChars(t);
    
    for (let key in sMap) {
        if (!tMap[key] || sMap[key] !== tMap[key]) return false;
    }
    
    return true;    
};
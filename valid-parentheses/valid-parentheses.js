/**
 * @param {string} s
 * @return {boolean}
 */

// input:
//  - string contianing only bracket chars
// output:
//  - boolean value representing whether all brackets in input string are valid
// approach:
//  - init open close count for each bracket
//  - iterate over input string for each bracket type
//  - if open equals close return true otherwise return false
var isValid = function(s) {
    const left = [];
  const legend = {
    '(': ')',
    '{': '}',
    '[': ']'
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      left.push(s[i]);    
    } else if (legend[left.pop()] !== s[i]) {
      return false;
    }
  }
  return left.length ? 0 : 1;
};


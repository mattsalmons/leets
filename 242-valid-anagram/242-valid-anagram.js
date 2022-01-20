/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// Writing your own helper function in a interview setting can score you a few extra points. Also, it's important to show your interviewer that you truly understand the problem by considering IOCE (Inputs, Outputs, Constraints, Edge cases). Even if you don't have time to write actual code, writing out each step in casual, conversational language could be enough. If you get to coding, you'll also have something to refer back to so you don't forget anything important. If I were asked this question in an interview, this is how I would respond:


// input: two strings
// output: boolean representing whether two input strings are anagrams of eachother
// constraints: O(n) time complexity (self imposed)
// edge cases (ask interviewer about special cases not stated in problem):
//    - empty inputs?
//    - spaces?
//    - special chars?

// approach:
//    - if length of inputs do not match, immediately return false
//    - write helper function to count chars in each input (using counter objects/maps)
//    - iterate over either counter object, compare to other
//         - if keys or values are different return false
//    - otherwise return true

const isAnagram = (s, t) => {
	if (s.length !== t.length) return false;
	
	// helper function
	const countChars = string => {
		const charMap = {};
		
		// using for...of syntax to help reduce chance of typos (instead of writing out traditional for loop)
		for (let char of string) {
			charMap[char] = charMap[char] + 1 || 1;
		}
		
		return charMap;
	}
	
	const sMap = countChars(s);
	const tMap = countChars(t);
	
	for (let key in sMap) {
		if (sMap[key] !== tMap[key]) return false;
	}
	
	return true;
}

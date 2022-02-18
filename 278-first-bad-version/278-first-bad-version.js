/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    
    // init left, right
    // iterate while left is less than or right
    //  init mid
    //  if mid is bad
    //      reassign right as mid
    //          otherwise
    //      reassign left as mid
    //  return left
    return function(n) {
        let [left, right] = [0, n];
        
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) right = mid - 1;
            else left = mid + 1;
        }
        
        return left;
    }
};

// 4, 5
// |
// 
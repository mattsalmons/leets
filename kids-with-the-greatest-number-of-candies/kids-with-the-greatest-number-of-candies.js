/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

// input:
//  - array of integers represting the number of candies each child has
//  - integer representing extra candies that can be distributed among the children
// output:
//  - array of booleans stating whether the current child could have the greatest
//    number of candies after receiving one or more of the extras.
// approach:
//  - init empty results array
//  - find kid with greatest number of candies
//  - iterate over candies array
//      - if current kid + extras is greater than greatest
//          - push true into results array
//              - otherwise
//          - push false
//  - return results

var kidsWithCandies = function(candies, extraCandies) {
    let most = Math.max(...candies);
    return candies.map(candy => candy + extraCandies >= most);
};
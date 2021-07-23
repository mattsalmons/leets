/**
 * @param {number[]} prices
 * @return {number}
 */


// input:
//  - array of prices
// output:
//  - integer representing max potential profit
// approach:
//  - init profit var at 0
//  - iterate over prices
//      - if prices at next is greater than prices at current
//          - update profit
//  - return profit
var maxProfit = function(prices) {
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i + 1] > prices[i]) {
            profit += prices[i + 1] - prices[i];
        }
    }
    return profit;
};

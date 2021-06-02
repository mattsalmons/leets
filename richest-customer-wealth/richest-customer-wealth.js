/**
 * @param {number[][]} accounts
 * @return {number}
 */

// input:
//  - array of arrays, each representing the account values of a specific customer.
// output:
//  - integer reprenting total wealth of the richest customer
// approach:
//  - create richest total var
//  - iterate over outer array
//      - create total
//      - iterate over inner array at current index
//          - if current total is greater than richest
//              - reset richest
//  - return richest

var maximumWealth = function(accounts) {
    let richest = 0;
    for (let i = 0; i < accounts.length; i++) {
        let total = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            total += accounts[i][j];
        }
        if (total > richest) {
            richest = total;
        }
    }
    return richest;
};
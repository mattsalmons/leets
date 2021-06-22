/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function(items, ruleKey, ruleValue) {
    let matches = 0
    let ruleKeyIndex = 2
    if (ruleKey === 'type') {
        ruleKeyIndex = 0;
    } else if (ruleKey === 'color') {
        ruleKeyIndex = 1;
    }
        
    for (let i = 0; i < items.length; i++) {
        if (items[i][ruleKeyIndex] === ruleValue) {
            matches++ 
        }
    }
    
    return matches;
};
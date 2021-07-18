/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */

// in:
//  - tree
//  - integer
// out:
//  - boolean representing whether or not sum of vals leading to a any leaf matches target
// approach:
//  - init sum var
//  - traverse function params: node, sum
//      - if left, invoke traverse on left node add val to sum
//      - if right, invoke traverse on right node add val to sum
//      - if no left and right and sum matches target
//          - return true
// return false
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    
    let match = false;
    
    let traverse = (node, sum) => {
        if (node.left) traverse(node.left, sum + node.left.val);
        if (node.right) traverse(node.right, sum + node.right.val);
        if (!node.right && !node.left && sum === targetSum) match = true;
    }
    
    traverse(root, root.val);

    return match
};
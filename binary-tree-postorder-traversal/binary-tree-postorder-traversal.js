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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (!root) return [];
    
    let result = [root.val];
    let traverse = node => {
        if (node.right) {
            result.unshift(node.right.val);
            traverse(node.right);
        }
        if (node.left) {
            result.unshift(node.left.val);
            traverse(node.left);
        }
    }
    
    traverse(root);
    
    return result;
};
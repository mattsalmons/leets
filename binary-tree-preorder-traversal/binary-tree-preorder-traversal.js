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
var preorderTraversal = function(root) {
    if (!root) return [];
    
    const result = [root.val];
    
    let traverse = node => {
        if (node.left) {
            result.push(node.left.val);
            traverse(node.left);
        }
        if (node.right) {
            result.push(node.right.val);
            traverse(node.right);
        }
    }
    
    traverse(root)
    
    return result;
};
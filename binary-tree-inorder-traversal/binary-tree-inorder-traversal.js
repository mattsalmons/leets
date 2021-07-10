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
var inorderTraversal = function(root) {
    let values = [];
    const traverse = root => {
        if (root === null) return;
        traverse(root.left);
        values.push(root.val);
        traverse(root.right);
    }
    traverse(root);
    return values;
};
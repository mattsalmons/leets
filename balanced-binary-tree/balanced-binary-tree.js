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
 * @return {boolean}
 */
var isBalanced = function(root) {
   const dfs = (node) => {
    if (!node) return 0; // Base case

    const left = dfs(node.left);
    if (left === -1) return -1; // Unbalanced left subtree
    const right = dfs(node.right);
    if (right === -1) return -1; // Unbalanced right subtree

    if (Math.abs(left - right) > 1) return -1; // Unbalanced tree
    return Math.max(left, right) + 1; // Calculate height
  };
  return dfs(root) !== -1;
};
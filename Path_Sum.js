// 112. Path Sum

// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.



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
var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    
    function dfs(node, currentSum) {
        if (!node) return false;
        
        currentSum += node.val;
        
        // Check if it is a leaf node
        if (node.left === null && node.right === null) {
            return currentSum === targetSum;
        }
        
        // Recursively check the left and right subtree
        return dfs(node.left, currentSum) || dfs(node.right, currentSum);
    }
    
    return dfs(root, 0);
};
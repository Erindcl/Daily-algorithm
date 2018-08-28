/*
	104. 二叉树的最大深度		
        给定一个二叉树，找出其最大深度。
        二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
        说明: 叶子节点是指没有子节点的节点。
    
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root == null) {
        return 0;
    }
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return left > right ? left + 1 : right + 1;
};

// 其他实现
var maxDepth = function (root) {
    if (root == null) {
        return 0
    }
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};
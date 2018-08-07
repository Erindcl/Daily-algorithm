/*
	101. 对称二叉树		
        给定一个二叉树，检查它是否是镜像对称的。
    分析:基于相同的树的算法，比较根节点的左右子树是否对称相等
    
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
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    function compare (p,q) {
        if (!p && !q) {
            return true;
        }
        if (!p || !q) {
            return false;
        } 
        return p.val == q.val && compare(p.left,q.right) && compare(p.right,q.left);
    }
    return compare(root.left,root.right);
};
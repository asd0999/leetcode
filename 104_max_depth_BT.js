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
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) return 0;

    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;

    // same thing but using a helper function
    //     function r(n) {
    //         if(n === null) return 0;
    //         let left = r(n.left);
    //         let right = r(n.right);

    //         return Math.max(left,right) + 1;
    //     }
    //     return r(root);
};
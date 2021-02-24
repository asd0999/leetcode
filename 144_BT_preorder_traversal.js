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

// recursive solution
var preorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
};

const helper = (root, res) => {
    if (!root) return;
    res.push(root.val);
    helper(root.left, res);
    helper(root.right, res);
};

// iterative solution
var preorderTraversal = function(root) {
    if (!root) return [];
    let res = [];
    let stack = [root];
    let node = null;
    while (stack.length > 0) {
        node = stack.pop();
        res.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    return res;
};
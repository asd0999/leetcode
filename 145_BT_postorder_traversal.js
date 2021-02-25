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
    let res = [];
    helper(root, res);
    return res;
};

var helper = function(root, res) {
    if (!root) return;
    helper(root.left, res);
    helper(root.right, res);
    res.push(root.val);
};

// iterative solution
var postorderTraversal = function(root) {
    if (!root) return [];
    let res = [];
    let stack = [];
    let node = root;
    while (node || stack.length > 0) {
        if (node) {
            stack.push(node);
            res.push(node.val); //or use res.unshift()
            node = node.right;
        } else {
            node = stack.pop();
            node = node.left;
        }
    }
    return res.reverse();
};
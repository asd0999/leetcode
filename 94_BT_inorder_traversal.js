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
var inorderTraversal = function(root) {
    let res = [];
    helper(root, res);
    return res;
};

var helper = function(root, res) {
    if (!root) return;
    helper(root.left, res);
    res.push(root.val);
    helper(root.right, res);
};

// iterative solution
var inorderTraversal = function(root) {
    if (!root) return [];
    let res = [];
    let stack = [];
    let node = root;
    while (true) {
        if (node !== null) {
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length === 0) {
                break;
            }
            node = stack.pop();
            res.push(node.val);
            node = node.right;
        }
    }
    return res;
};
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
var findMode = function(root) {
    let map = {};
    traverse(root, map);
    let max = 0;
    let res = [];
    for (let key in map) {
        if (map[key] > max) {
            max = map[key];
            res = [key];
        } else if (map[key] === max) {
            res.push(key);
        }
    }
    return res;
};

function traverse(root, map) {
    if (!root) return 0;

    if (map[root.val]) {
        map[root.val]++;
    } else {
        map[root.val] = 1;
    }

    traverse(root.left, map);
    traverse(root.right, map);
}
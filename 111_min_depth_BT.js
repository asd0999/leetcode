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
var minDepth = function(root) {
    if (root === null) return 0;

    let q = [];
    q.push(root);

    let depth = 0;

    while (q.length > 0) {
        let nodes = q.length;
        while (nodes > 0) {
            let cur = q.shift();
            if (!cur.left && !cur.right) {
                return depth + 1;
            }

            if (cur.left) {
                q.push(cur.left);
            }
            if (cur.right) {
                q.push(cur.right);
            }
            nodes--;
        }
        depth++;
    }
    return depth;
};
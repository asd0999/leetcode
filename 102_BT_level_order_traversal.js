/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// solution 1 - i understand
var levelOrder = function(root) {
    if (!root) return [];
    return helper([
        [root]
    ], 0);
};

var helper = function(res, level) {
    var now = res[level];
    var next = [];

    for (var i = 0; i < now.length; i++) {
        if (now[i].left) next.push(now[i].left);
        if (now[i].right) next.push(now[i].right);
        now[i] = now[i].val;
    }

    if (next.length) {
        res.push(next);
        helper(res, level + 1);
    }

    return res;
};

// solution 2 - i dont understand
var levelOrder = function(root) {
    return helper([], root, 0);
};

var helper = function(res, root, level) {
    if (root) {
        if (!res[level]) res[level] = [];
        res[level].push(root.val);
        helper(res, root.left, level + 1);
        helper(res, root.right, level + 1);
    }
    return res;
};

// ref: https://baffinlee.com/leetcode-javascript/problem/binary-tree-level-order-traversal.html

// my solution - which doesnt give info about the levels by using nested arrays
var levelOrder = function(root) {
    return helper([], root, 0);
};

var helper = function(res, root, level) {
    if (root) {
        if (!res[level]) res[level] = [];
        res[level].push(root.val);
        helper(res, root.left, level + 1);
        helper(res, root.right, level + 1);
    }
    return res;
};

// my newest solution based on minDepth #111
var levelOrder = function(root) {
    if (!root) return [];

    let res = [];
    let q = [];
    q.push(root);

    while (q.length > 0) {
        let nodes = q.length;
        let level = [];
        while (nodes > 0) {
            let cur = q.shift();
            // console.log(cur);
            level.push(cur.val);
            if (cur.left) {
                q.push(cur.left);
            }
            if (cur.right) {
                q.push(cur.right);
            }
            nodes--;
        }
        // console.log(level);
        res.push(level);
        level = [];
    }

    return res;
};
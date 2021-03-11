/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums || nums.length === 0) return null;

    return constructBST(nums, 0, nums.length - 1);
};

var constructBST = function(nums, min, max) {
    if (min > max) return null;

    let mid = Math.floor((min + max) / 2);
    let cur = new TreeNode(nums[mid]);

    cur.left = constructBST(nums, min, mid - 1);
    cur.right = constructBST(nums, mid + 1, max);

    return cur;
};
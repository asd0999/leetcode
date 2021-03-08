/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // solution 1
    for (let i = 0; i < k; i++) {
        nums.unshift(nums[nums.length - 1]);
        nums.pop();
    }

    // solution 2 - more efficient
    nums.unshift(...nums.splice(nums.length - k, k));

    return nums;
};

console.log(rotate([1, 2, 3, 4, 5], 3));
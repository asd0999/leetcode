/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums) {
    if (nums === null || nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);

    let dp = [];
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    console.log(dp);
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
        console.log(i, dp);
    }

    return dp[nums.length - 1];
};

console.log(rob([2, 7, 9, 3, 1, 4]));
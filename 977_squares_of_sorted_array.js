/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let res = [];
    let left = 0;
    let right = nums.length - 1;
    let index = nums.length - 1;
    while (left <= right) {
        if (Math.abs(nums[left]) < Math.abs(nums[right])) {
            res[index] = nums[right] ** 2;
            right--;
        } else {
            res[index] = nums[left] ** 2;
            left++;
        }
        index--;
    }
    return res;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));
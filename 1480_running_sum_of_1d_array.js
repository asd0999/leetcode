/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0;
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        res.push(sum);
    }
    // console.log(res);
    return res;
};

runningSum([1, 2, 3, 4]);
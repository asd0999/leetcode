/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let globalMax = nums[0];
    let localMax = nums[0];
    console.log("localMax", localMax);
    for (let i = 1; i < nums.length; i++) {
        let a = nums[i];
        let b = nums[i] + localMax;
        console.log(a, "vs", b);
        if (a > b) {
            localMax = a;
        } else {
            localMax = b;
        }
        if (localMax > globalMax) {
            globalMax = localMax;
        }
        console.log("localMax", localMax);
    }
    console.log(globalMax);
    return globalMax;
};

// check :
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([-2, -1]));
// console.log(maxSubArray([1]));
// console.log(maxSubArray([0]));
// console.log(maxSubArray([-1]));
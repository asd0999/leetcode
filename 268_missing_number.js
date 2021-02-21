/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // if (nums.length === 1 && nums[0] === 0) {
    //     return 1;
    // } else if (nums.length === 1 && nums[0] === 1) {
    //     return 0;
    // }
    // if (!nums.includes(nums.length)) return nums.length;
    // arr = nums.sort((a, b) => a - b);
    // if (arr[0] !== 0) return 0;
    // for (let i = 1; i < arr.length; i++) {
    //     if (arr[i] - arr[i - 1] !== 1) {
    //         return arr[i] - 1;
    //     }
    // }

    // more elegant solution (even tho slower bc it doesnt account for specific cases with if statements up front)
    arr = nums.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== i) {
            return i;
        }
    }
    return arr.length;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([0, 1]));
console.log(missingNumber([1]));
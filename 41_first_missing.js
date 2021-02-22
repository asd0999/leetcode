/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let arr = nums.filter((item) => item >= 0).sort((a, b) => a - b);
    console.log(arr);
    if (arr.length === 0) {
        return 1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] > 1) {
            return 1;
        }
        if (arr[i + 1] - arr[i] > 1) {
            return arr[i] + 1;
        }
    }
    return arr[arr.length - 1] + 1;
};

console.log(firstMissingPositive([])); // 1
console.log(firstMissingPositive([-5])); // 1
console.log(firstMissingPositive([1, 2, 0])); // 3
console.log(firstMissingPositive([3, 4, -1, 1])); // 2
console.log(firstMissingPositive([7, 8, 9, 11, 12])); // 1
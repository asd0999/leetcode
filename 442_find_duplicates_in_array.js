/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let numset = new Set();
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        if (!numset.has(nums[i])) {
            numset.add(nums[i]);
        } else {
            res.push(nums[i]);
        }
    }
    return res;
};

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
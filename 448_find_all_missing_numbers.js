/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    if (nums.length === 0) {
        return [];
    }
    let res = [];
    let numset = new Set(nums);
    for (let i = 1; i <= nums.length; i++) {
        if (!numset.has(i)) {
            res.push(i);
        }
    }
    return res;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
console.log(findDisappearedNumbers([1, 1, 2, 2]));
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (map[cur]) {
            return true;
        } else {
            map[cur] = 1;
        }
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
console.log(containsDuplicate([1, 2, 3, 4]));
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            let tmp = nums.splice(i, 1);
            i--;
        }
    }
    console.log(nums);
    return nums.length;
};

// check :
removeElement([3, 2, 2, 3], 3);
removeElement([0, 1, 2, 2, 3, 0, 4, 2, 2], 2);
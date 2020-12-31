/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i > 0) {
            if (nums[i] == nums[i - 1]) {
                let a = nums.splice(i, 1);
                i--;
            }
        }
    }
    // console.log(nums);
    return nums.length;
};

// check :
removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4]);
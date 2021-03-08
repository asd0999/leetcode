/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            let a = nums.splice(i, 1);
            i--;
        }
    }
    // console.log(nums);
    return nums.length;
};

//solution 2 - without using splice method
var removeDuplicates2 = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            for (let j = i; j < nums.length - 1; j++) {
                nums[j] = nums[j + 1];
            }
            nums.pop();
            i--;
        }
    }
    return nums.length;
};

// check :
removeDuplicates([1, 1, 2]);
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4]);
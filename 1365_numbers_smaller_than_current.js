/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] > nums[j]) {
                count++;
            }
        }
        res.push(count);
    }
    return res;
};

console.log(smallerNumbersThanCurrent([6, 5, 4, 8]));
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
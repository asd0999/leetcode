/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i += 2) {
        let tmp = [];
        let n = nums[i];
        let val = nums[i + 1];
        while (n > 0) {
            tmp.push(val);
            n--;
        }
        res = [...res].concat(tmp);
    }

    return res;
};

console.log(decompressRLElist([1, 2, 3, 4])); //[2,4,4,4]
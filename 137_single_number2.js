/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {};
    for (let n of nums) {
        if (!obj[n]) {
            obj[n] = 1;
        } else {
            obj[n] += 1;
        }
    }
    return Object.keys(obj).find((key) => obj[key] === 1);
};

console.log(singleNumber([3, 3, 3, 4, 1, 1, 1]));
/**
 * @param {number[]} nums
 * @return {number[]}
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
    return Object.keys(obj).filter((key) => obj[key] === 1);
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]));
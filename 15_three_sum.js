/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//solution 1 - not acceptable, time limit exceeded
// var threeSum = function(nums) {
//     if (nums.length < 3) return [];

//     nums.sort((a, b) => a - b);
//     let res = [];
//     let cur = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//         for (let j = i + 1; j < nums.length; j++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue;
//             if (j > i + 1 && nums[j] === nums[j - 1]) continue;
//             for (let k = j + 1; k < nums.length; k++) {
//                 if (k > j + 1 && nums[k] === nums[k - 1]) continue;
//                 if (i !== j && j !== k && i !== k) {
//                     if (nums[i] + nums[j] + nums[k] === 0) {
//                         cur.push(nums[i]);
//                         cur.push(nums[j]);
//                         cur.push(nums[k]);
//                         cur.sort((a, b) => a - b);
//                         res.push(cur);
//                         cur = [];
//                     }
//                 }
//             }
//         }
//     }
//     return res;
// };

// solution 2 - works, could be optimized
var threeSum = function(nums) {
    if (nums.length < 3) return [];

    nums.sort((a, b) => a - b);
    console.log(nums);

    let res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                while (nums[j] === nums[j + 1]) j++;
                j++;
            } else if (sum > 0) {
                while (nums[k] === nums[k - 1]) k--;
                k--;
            } else {
                res.push([nums[i], nums[j], nums[k]]);
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            }
        }
    }
    return res;
};

// test :
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, 4]));
console.log(threeSum([-1, 0, 1, 2, -1, -4, 4, -3]));
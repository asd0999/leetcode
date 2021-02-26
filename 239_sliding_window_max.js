/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// solution 1 - works but too slow (not acceptable)
// var maxSlidingWindow = function(nums, k) {
//     if (nums.length < k) return [];

//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         let cur = null;
//         let t = 0;
//         while (t < k && i < nums.length - k + 1) {
//             cur === null ? (cur = nums[i + t]) : (cur = Math.max(cur, nums[i + t]));
//             t++;
//         }
//         if (cur) {
//             res.push(cur);
//         }
//     }
//     return res;
// };

// solution 2 - also works, also too slow (kuso!!!!)
var maxSlidingWindow = function(nums, k) {
    let res = [];
    for (let i = 0; i < nums.length - k + 1; i++) {
        res.push(Math.max(...nums.slice(i, k + i)));
    }
    return res;
};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3,3,5,5,6,7]
console.log(maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4)); // [7,7,7,7,7]
console.log(maxSlidingWindow([1], 1)); // [1]
console.log(maxSlidingWindow([1, -1], 1)); // [1]
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let res = nums.sort((a, b) => b - a);
    // console.log(res[k-1])

    return res[k - 1];
};

// test :
console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
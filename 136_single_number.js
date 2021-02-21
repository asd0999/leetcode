/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // solution 1 - sorting array
    // let sorted_arr = nums.sort((a, b) => a - b);
    // for (let i = 0; i < sorted_arr.length; i++) {
    //     if (sorted_arr[i] === sorted_arr[i + 1]) {
    //         i++;
    //     } else {
    //         return sorted_arr[i];
    //     }
    // }

    // solution 2 - using object (faster than solution 1)
    // let hmap = {};
    // for (let n of nums) {
    //     if (!hmap[n]) {
    //         hmap[n] = 1;
    //     } else {
    //         delete hmap[n];
    //     }
    // }
    // return Object.keys(hmap)[0];

    // solution 3 - using hash map (faster than solution 2)
    // let hmap = new Map();
    // for (let n of nums) {
    //     if (!hmap.get(n)) {
    //         hmap.set(n, 1);
    //     } else {
    //         hmap.delete(n);
    //     }
    // }
    // for (let k of hmap.keys()) {
    //     return k;
    // }

    // solution 4 - clever solution
    // let set = [...new Set(nums)];
    // let set_sum = set.reduce((acc, n) => acc + n, 0);
    // let nums_sum = nums.reduce((acc, n) => acc + n, 0);
    // return set_sum * 2 - nums_sum;

    // solution 5 - using XOR (best solution O(n) runtime complexity w/o using memory)
    let res = 0;
    for (const n of nums) {
        res ^= n;
    }
    return res;
};

console.log(singleNumber([4, 1, 2, 1, 2]));
console.log(singleNumber([3, 3, 4, 1, 2, 1, 2]));

/*
nums_sum = 4+1+2+1+2 = 10
set_sum = 4+1+2 = 7
7*2 - 10 = 4
*/
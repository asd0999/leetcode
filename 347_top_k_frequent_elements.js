/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let res = [];
    let freq = {};
    for (let i = 0; i < nums.length; i++) {
        let cur = nums[i];
        if (freq[cur]) {
            freq[cur]++;
        } else {
            freq[cur] = 1;
        }
    }

    // while (res.length < k) {
    //     let max = 0;
    //     let num = null;
    //     for (let n in freq) {
    //         if (freq[n] > max) {
    //             max = freq[n];
    //             num = n;
    //             // break;
    //         }
    //     }
    //     delete freq[num];
    //     res.push(num);
    //     max = 0;
    //     num = null;
    // }

    res = Object.keys(freq)
        .sort((a, b) => freq[b] - freq[a])
        .slice(0, k);
    // console.log(res);

    return res;
};

// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(
    topKFrequent(
        [
            3,
            2,
            3,
            1,
            2,
            4,
            5,
            5,
            6,
            7,
            7,
            8,
            2,
            3,
            1,
            1,
            1,
            10,
            11,
            5,
            6,
            2,
            4,
            7,
            8,
            5,
            6,
        ],
        10
    )
);
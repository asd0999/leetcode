/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let short = nums1.length < nums2.length ? nums1 : nums2;
    let long = nums1.length < nums2.length ? nums2 : nums1;
    let result = [];
    let map = {};
    for (let i = 0; i < short.length; i++) {
        let cur = short[i];
        if (map[cur]) {
            map[cur]++;
        } else {
            map[cur] = 1;
        }
    }

    for (let i = 0; i < long.length; i++) {
        let cur = long[i];
        if (map[cur]) {
            if (map[cur] > 0) {
                map[cur]--;
            } else {
                delete map[cur];
            }
            result.push(cur);
        }
    }

    return result;
};

console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
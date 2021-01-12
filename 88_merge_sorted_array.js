/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // console.log(nums1, nums2);
    m--;
    n--;
    let index = nums1.length - 1;
    while (index >= 0) {
        if (m < 0) {
            nums1[index] = nums2[n];
            n--;
        } else if (n < 0) {
            nums1[index] = nums1[m];
            m--;
        } else {
            if (nums1[m] > nums2[n]) {
                nums1[index] = nums1[m];
                m--;
            } else {
                nums1[index] = nums2[n];
                n--;
            }
        }
        index--;
    }

    console.log(nums1);
    // return nums1;
};

// check :
merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
merge([1, 2, 3, 4, 0, 0, 0], 4, [2, 5, 6], 3);
merge([0], 0, [2], 1); //[2]
merge([1], 1, [], 0); //[1]
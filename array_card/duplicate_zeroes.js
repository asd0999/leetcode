// https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/

// Given a fixed length array arr of integers, duplicate each occurrence of zero, shifting the remaining elements to the right.

// Note that elements beyond the length of the original array are not written.

// Do the above modifications to the input array in place, do not return anything from your function.

/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const l = arr.length;
    console.log(arr);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            for (let j = arr.length - 1; j > i; j--) {
                arr[j + 1] = arr[j];
            }
            arr[i + 1] = 0;
            i++;
            console.log(arr);
        }
    }
    arr.splice(l, arr.length - l);
    console.log(arr);
    return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
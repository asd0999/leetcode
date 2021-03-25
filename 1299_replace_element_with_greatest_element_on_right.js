/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let greatest = arr[i + 1];
        for (let j = i + 1; j < arr.length; j++) {
            greatest = Math.max(greatest, arr[j]);
        }
        res.push(greatest);
    }
    res.pop();
    res.push(-1);
    return res;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1])); // [18,6,6,6,1,-1]
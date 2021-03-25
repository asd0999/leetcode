/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr = s.split("");
    for (let i = 0; i < arr.length; i += 2 * k) {
        let first = arr.splice(0, i);
        let rev = arr.splice(0, k);
        let last = arr;
        rev.reverse();
        arr = [...first].concat(rev).concat(last);
        console.log(arr);
    }
    return arr.join("");
};

// console.log(reverseStr("abcdefg", 2));
console.log(reverseStr("abcdefghijk", 3));
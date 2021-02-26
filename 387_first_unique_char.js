/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let lowest = Infinity;
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (obj[char]) {
            obj[char] += 1;
        } else {
            obj[char] = 1;
        }
    }

    for (let k in obj) {
        if (obj[k] === 1) {
            lowest = Math.min(s.indexOf(k), lowest);
        }
    }

    return lowest === Infinity ? -1 : lowest;
};

// test :
console.log(firstUniqChar("leetcode"));
console.log(firstUniqChar("loveleetcode"));
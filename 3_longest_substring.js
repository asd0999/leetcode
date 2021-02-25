/**
 * @param {string} s
 * @return {number}
 */
// brute force solution
// var lengthOfLongestSubstring = function(s) {
//     let array = s.split("");
//     let l_max = 0;
//     let g_max = 0;

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i; j < array.length; j++) {
//             let sub = array.slice(i, j + 1).join("");
//             // console.log(sub);
//             let set = new Set(sub);
//             if (set.size === sub.length) {
//                 l_max = sub.length;
//                 if (l_max > g_max) g_max = l_max;
//             }
//         }
//     }
//     return g_max;
// };

// better solution
// var lengthOfLongestSubstring = function(s) {
//     let max = 0;
//     let current = 0;
//     let seen = [];
//     let start = 0;
//     let done = false;

//     while (start < s.length && !done) {
//         for (let i = start; i < s.length; i++) {
//             const char = s[i];
//             if (!seen.includes(char)) {
//                 seen.push(char);
//                 current++;
//                 // console.log(seen);
//                 if (i === s.length - 1) {
//                     done = true;
//                     max = Math.max(max, current);
//                 }
//             } else {
//                 max = Math.max(max, current);
//                 current = 0;
//                 start += seen.indexOf(char) + 1;
//                 seen = [];
//                 break;
//             }
//         }
//     }

//     return max;
// };

// best solution
var lengthOfLongestSubstring = function(s) {
    let seen = [];
    let max = -Infinity;

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        seenIndex = seen.indexOf(char);
        if (seenIndex !== -1) {
            max = Math.max(max, seen.length);
            seen = seen.slice(seenIndex + 1);
        }
        seen.push(char);
    }
    max = Math.max(max, seen.length);
    return max;
};

// test :
console.log("abcabcbb", lengthOfLongestSubstring("abcabcbb")); //3
console.log("adbcb", lengthOfLongestSubstring("adbcb")); //4
console.log("bbbb", lengthOfLongestSubstring("bbbb")); //1
console.log("pwwkew", lengthOfLongestSubstring("pwwkew")); //3
console.log("dvdf", lengthOfLongestSubstring("dvdf")); //3
console.log("anviaj", lengthOfLongestSubstring("anviaj")); //5
console.log("tmmzuxt", lengthOfLongestSubstring("tmmzuxt")); //5
console.log("anviajanqwert", lengthOfLongestSubstring("anviajanqwert")); //8
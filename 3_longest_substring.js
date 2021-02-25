/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;

    let m = {};
    for (let i = 0; i < s.length; i++) {
        m[i] = s[i];
    }
    let cur = m[0];
    let g_max = 1;
    let l_max = 1;
    console.log(m);

    for (let i = 1; i < Object.keys(m).length; i++) {
        console.log(i);
        if (m[i] !== m[i - 1] && !cur.includes(m[i])) {
            l_max++;
            cur += m[i];
            if (l_max > g_max) g_max = l_max;
        } else {
            let ii = parseInt(Object.keys(m).find((key) => m[key] === m[i]));
            console.log("else", ii, i);
            i = ii + 1;
            cur = m[i + 1];
            console.log("cur", cur);
            l_max = 1;
            continue;
        }
        // console.log(cur, l_max, g_max);
    }
    return g_max;
};

// console.log(lengthOfLongestSubstring("abcabcbb")); //3
// console.log(lengthOfLongestSubstring("bbbb")); //1
// console.log(lengthOfLongestSubstring("pwwkew")); //3
// console.log(lengthOfLongestSubstring("dvdf")); //3
console.log(lengthOfLongestSubstring("anviaj")); //5
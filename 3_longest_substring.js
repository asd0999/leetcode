/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) return 0;

    let set = new Set();
    let g_max = 0;
    let l_max = 0;
    let cur = "";

    for (let i = 0; i < s.length; i++) {
        // console.log("0", set);
        cur = s[i];
        if (!set.has(cur)) {
            set.add(cur);
            l_max++;
            if (l_max > g_max) {
                g_max = l_max;
            }
        }
        // console.log("1", set);
        for (let j = i + 1; j < s.length; j++) {
            if (s[i] !== s[j] && !set.has(s[j])) {
                l_max++;
                set.add(s[j]);
                // console.log("2", set);
            } else {
                if (l_max > g_max) {
                    g_max = l_max;
                }
                l_max = 0;
                while (i < j) {
                    if (s[i] === s[j]) {
                        set.delete(s[i]);
                        // console.log("3", set);
                        break;
                    }
                    i++;
                }
                // console.log("4", set);
            }
            if (l_max > g_max) {
                g_max = l_max;
            }
        }
    }
    return g_max;
};

// test :
console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("adbcb")); //4
console.log(lengthOfLongestSubstring("bbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3
console.log(lengthOfLongestSubstring("dvdf")); //3
console.log(lengthOfLongestSubstring("anviaj")); //5
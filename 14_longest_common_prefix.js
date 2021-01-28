/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = "";
    if (strs === null || strs.length === 0) return prefix;

    for (let i = 0; i < strs[0].length; i++) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (char !== strs[j][i]) return prefix;
        }
        prefix += char;
    }

    return prefix;
};

// check :
console.log(
    "Common prefix: ",
    longestCommonPrefix(["flower", "flow", "flight"]),
    "\n"
);
console.log(
    "Common prefix: ",
    longestCommonPrefix(["flower", "flow", "flop", "flight", "fast"]),
    "\n"
);
console.log(
    "Common prefix: ",
    longestCommonPrefix(["dog", "racecar", "car"]),
    "\n"
);
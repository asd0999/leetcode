/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let a = s.split("").sort().join("");
    let b = t.split("").sort().join("");
    console.log(a, b);

    return a === b;
};
console.log(isAnagram("anagram", "nagaram"));
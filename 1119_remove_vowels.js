/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function(s) {
    let res = s.replace(/[a,e,i,o,u]/g, "");
    return res;
};

console.log(removeVowels("leetcodeisacommunityforcoders"));
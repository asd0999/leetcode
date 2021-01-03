/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let words = s.split(" ");
    console.log(words);
    if (words.length == 1) return words[0].length;
    for (let i = words.length - 1; i >= 0; i--) {
        if (words[i] !== "") {
            return words[i].split("").length;
        }
    }
    return 0;
};

// check :
console.log(lengthOfLastWord("hi world"));
console.log(lengthOfLastWord(" "));
console.log(lengthOfLastWord(""));
console.log(lengthOfLastWord("a "));
console.log(lengthOfLastWord("a bb    "));
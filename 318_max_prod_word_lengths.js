/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function(words) {
    let word1 = "";
    let word2 = "";
    let prod = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            let bool = words[j].split("").every((char) => {
                return !words[i].includes(char);
            });
            // console.log(words[i], words[j], bool);
            if (bool) {
                word1 = words[i];
                word2 = words[j];
                if (word1.length * word2.length > prod) {
                    prod = word1.length * word2.length;
                }
            }
        }
    }

    return prod;
};

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
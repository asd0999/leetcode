/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function(A, B) {
    let bword = B.split("");
    let swaps = 0;
    for (let i = 0; i < A.length; i++) {
        if (A[i] !== bword[i]) {
            swaps++;
            index = bword.findIndex((c, ii) => c === A[i] && ii > i);
            let tmp = bword[index];
            bword[index] = bword[i];
            bword[i] = tmp;
            // console.log(bword);
        }
    }

    return swaps;
};

// test :
console.log(kSimilarity("ab", "ba")); // 1
console.log(kSimilarity("abc", "bca")); // 2
console.log(kSimilarity("abac", "baca")); // 2
console.log(kSimilarity("aabc", "abca")); // 2
console.log(kSimilarity("abcbca", "ababcc")); // 1
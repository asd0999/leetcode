/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
var kSimilarity = function(A, B) {
    let bword = B.split("");
    let swaps = 0;
    let skips = new Set();
    for (let i = 0; i < A.length; i++) {
        if (A[i] === bword[i]) {
            skips.add(i);
        }
    }

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== bword[i] && !skips.has(i)) {
            index = bword.findIndex((char, ii) => {
                if (
                    char === A[i] &&
                    ii > i &&
                    bword[ii] === A[i] &&
                    A[ii] === bword[i]
                ) {
                    skips.add(i);
                    skips.add(ii);
                    return ii;
                }
            });
            if (index !== -1) {
                let tmp = bword[index];
                bword[index] = bword[i];
                bword[i] = tmp;
                swaps++;
            }
        }
    }
    // console.log("swaps so far:", swaps);
    // console.log(A);
    // console.log(bword.join(""));

    // for (let i = 0; i < A.length; i++) {
    //     if (A[i] !== bword[i] && !skips.has(i)) {
    //         index = bword.findIndex((char, ii) => {
    //             if (char === A[i] && ii >= i && char === A[bword.indexOf(A[ii])]) {
    //                 // skips.add(i);
    //                 // skips.add(ii);
    //                 return ii;
    //                 // }
    //             }
    //         });
    //         // if (index !== -1) {
    //         // console.log(i, index);
    //         let tmp = bword[index];
    //         bword[index] = bword[i];
    //         bword[i] = tmp;
    //         swaps++;
    //         // }

    //         // console.log(bword.join(""));
    //     }
    // }

    for (let i = 0; i < A.length; i++) {
        if (A[i] !== bword[i] && !skips.has(i)) {
            index = bword.findIndex((char, ii) => {
                if (char === A[i] && ii > i) {
                    // console.log(i, index, char, A[i]);
                    // skips.add(i);
                    // skips.add(ii);
                    return ii;
                }
            });
            if (index !== -1) {
                let tmp = bword[index];
                bword[index] = bword[i];
                bword[i] = tmp;
                swaps++;
            }

            // console.log(bword.join(""));
        }
    }
    // console.log(skips);
    return swaps;
};

// test :
console.log(kSimilarity("ab", "ba")); // 1
console.log(kSimilarity("abc", "bca")); // 2
console.log(kSimilarity("abac", "baca")); // 2
console.log(kSimilarity("aabc", "abca")); // 2
console.log(kSimilarity("abcbca", "ababcc")); // 1
console.log(kSimilarity("abcdeabcdeabcdeabcde", "aaaabbbbccccddddeeee")); // 8
console.log(kSimilarity("aabbccddee", "cdacbeebad")); // 6
console.log(kSimilarity("abccaacceecdeea", "bcaacceeccdeaae")); // 9
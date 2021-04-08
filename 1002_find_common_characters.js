/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    for (let i = 0; i < A.length; i++) {
        A[i] = A[i].split("");
    }
    let res = [];
    for (let i = 0; i < A[0].length; i++) {
        let tmp = [];
        let cur = A[0][i];
        for (let j = 1; j < A.length; j++) {
            if (A[j].indexOf(cur) !== -1) {
                A[j].splice(A[j].indexOf(cur), 1);
                // console.log(A[j]);
                tmp.push(cur);
            }
        }
        if (tmp.length === A.length - 1) {
            res.push(tmp[0]);
            tmp = [];
        }
    }
    return res;
};

// test :

console.log(commonChars(["bella", "label", "roller"])); // [e,l,l]
console.log(commonChars(["cool", "lock", "cook"])); // [c,o]
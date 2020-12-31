/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    // essentially implement the following :
    // return haystack.indexOf(needle);
    if (needle == "" || needle == haystack) {
        return 0;
    }

    if (needle.length > haystack.length) {
        return -1;
    }

    let found = false;
    let pos = -1;
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0] && !found) {
            for (let j = 0; j < needle.length; j++) {
                if (needle[j] == haystack[i + j]) {
                    found = true;
                    pos = i + j - (needle.length - 1);
                } else {
                    found = false;
                    pos = -1;
                    break;
                }
            }
        }
        if (found) {
            break;
        }
    }

    return pos;
};

// check :
console.log(strStr("hello", "")); //0
console.log(strStr("hello", "mm")); //-1
console.log(strStr("hello", "ll")); //2
console.log(strStr("aaaaa", "ba")); //-1
console.log(strStr("", "")); //0
console.log(strStr("a", "a")); //0
console.log(strStr("abc", "c")); //2
console.log(strStr("ccc", "c")); //0
console.log(strStr("mississippi", "issip")); //4
console.log(strStr("mississippi", "sipp")); //6
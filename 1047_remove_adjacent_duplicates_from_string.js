/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let str = S.split("");
    let ret = true;
    while (ret) {
        [str, ret] = removeOnce(str);
    }

    return str.join("");
};

var removeOnce = function(str) {
    let change = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            str.splice(i, 2);
            i--;
            change = true;
        }
    }
    return [str, change];
};

console.log(removeDuplicates("abbaca"));
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    console.log(strs);
    let arr = strs.splice(0, 1);
    let commonPrefix = "";
    let currentLetter = strs[0][0];
    for (let s = 0; s < strs.length; s++) {
        if (s == 0) {
            let tempArr = strs.slice(0, 1);
            arr.push(tempArr[0]);
        } else {
            arr = [];
            arr.push(commonPrefix);
            arr.push(strs[s]);
        }
        console.log(arr);
        commonPrefix = "";

        for (let i = 0; i < arr[0].length; i++) {
            if (arr[0][i] == arr[1][i]) {
                commonPrefix += arr[0][i];
                console.log(currentLetter, commonPrefix);
                currentLetter = arr[0][i + 1];
            } else {
                console.log(currentLetter);
                currentLetter = arr[0][0];
                break;
            }
        }
    }

    return commonPrefix;
};

// check :
console.log(
    "Common prefix: ",
    longestCommonPrefix(["flower", "flow", "flight"])
);
console.log(
    "Common prefix: ",
    longestCommonPrefix(["flower", "flow", "flop", "flight", "fast"])
);
console.log("Common prefix: ", longestCommonPrefix(["dog", "racecar", "car"]));
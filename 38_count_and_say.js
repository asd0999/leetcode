/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    // if (n == 1) return "1";
    // for (let t = 0; t < array.length; t++) {}
    let strArr = n.toString().split("");
    let cur;
    let prev = strArr[0];
    let count = 1;
    let answer = "";
    for (let i = 1; i < strArr.length; i++) {
        cur = strArr[i];
        if (cur == prev) {
            count++;
        } else {
            answer += count.toString();
            answer += strArr[i - 1];
            // console.log(answer);
            // console.log(count);
            count = 1;
        }
        prev = strArr[i];
    }
    answer += count.toString();
    answer += strArr[strArr.length - 1];
    // console.log(count);
    return answer;
};

console.log(countAndSay(1));
console.log(countAndSay(11));
console.log(countAndSay(21));
console.log(countAndSay(1211));
console.log(countAndSay(111221));
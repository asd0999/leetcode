/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n == 1) return "1";
    let cur;
    let answer = "";
    let prev;
    let strArr = "1";
    let count = 1;
    let times = 1;
    while (times < n) {
        // console.log("\nn = ", times + 1);
        // console.log(strArr.split(""));
        prev = "";
        answer = "";
        count = 1;
        for (let i = 0; i < strArr.length; i++) {
            if (strArr.length == 1) {
                break;
            }
            cur = strArr[i];
            // console.log("cur: ", cur);
            // console.log("prev: ", prev);
            if (cur == prev) {
                count++;
                // console.log("Count++", count);
                lastStrAdded = false;
            } else if (prev != "") {
                // console.log("Count: ", count);
                answer += count.toString();
                answer += strArr[i - 1];
                // console.log("Answer: ", answer);
                count = 1;
            }
            prev = strArr[i];
        }

        answer += count.toString();
        answer += strArr[strArr.length - 1];
        // console.log("Final Answer: ", answer);

        strArr = answer;
        times++;
    }

    return answer;
};

//regex solution
var countAndSay2 = function(n) {
    a = "1";
    while (n > 1) {
        a = a.replace(/(\d)\1*/g, (m, v) => `${m.length}${v}`);
        n--;
    }
    return a;
};

// check :
console.log(countAndSay2(1));
console.log(countAndSay2(2));
console.log(countAndSay2(3));
console.log(countAndSay2(4));
console.log(countAndSay2(5));
console.log(countAndSay2(6));
console.log(countAndSay2(7));
console.log(countAndSay2(8));
console.log(countAndSay2(9));
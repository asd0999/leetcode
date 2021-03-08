/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    s = s.replace(/[^-+][^0-9]/g, "");
    // console.log(s);

    let m = 1;
    if (s[0] === "-") {
        m = -1;
        s = s.slice(1);
    } else if (s[0] === "+") {
        s = s.slice(1);
    }
    // console.log(s, m);
    return parseInt(s) * m;
};

console.log(myAtoi("words and    +987"));
console.log(myAtoi("    -42"));
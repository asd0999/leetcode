/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let res = [];
    let i = 1;
    while (i <= n) {
        if (i % 3 === 0 && i % 5 !== 0) {
            res.push("Fizz");
        } else if (i % 3 !== 0 && i % 5 === 0) {
            res.push("Buzz");
        } else if (i % 3 === 0 && i % 5 === 0) {
            res.push("FizzBuzz");
        } else {
            res.push(i.toString());
        }
        i++;
    }
    return res;
};
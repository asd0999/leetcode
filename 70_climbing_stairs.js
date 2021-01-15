/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let stairs = [];
    stairs[0] = 1;
    stairs[1] = 1;
    let i = 2;

    while (i <= n) {
        stairs[i] = stairs[i - 1] + stairs[i - 2];
        i++;
    }

    return stairs[stairs.length - 1];
};

console.log(climbStairs(6));
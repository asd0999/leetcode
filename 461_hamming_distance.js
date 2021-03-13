/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    let result = 0;
    while (x != 0 || y != 0) {
        result += x % 2 ^ y % 2;
        x >>>= 1;
        y >>>= 1;
    }
    return result;
};
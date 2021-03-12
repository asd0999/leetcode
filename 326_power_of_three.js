/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 2) {
        n = n / 3;
    }
    if (n === 1) {
        return true;
    }
    return false;
};

console.log(isPowerOfThree(27));
console.log(isPowerOfThree(54));
console.log(isPowerOfThree(77));
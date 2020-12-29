/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    let xStr = x.toString();
    let revStr = xStr.split("").reverse().join("");

    return xStr == revStr ? true : false;
};

// check :
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
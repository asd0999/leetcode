/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let negative = false;
    let str = "";

    // if x == 0
    if (x == 0) return x;

    if (x < 0) {
        //if x is a nagative number
        negative = true;
        let cleanStr = x.toString().split("-");
        str = cleanStr[1].split("").reverse().join("");
    } else {
        // if x is a positive number
        str = x.toString().split("").reverse().join("");
    }

    let n = parseInt(str);

    //constraint
    if (n < Math.pow(-2, 31) || n > Math.pow(2, 31) - 1) return 0;

    negative ? (n *= -1) : n;
    return n;
};

// check :
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(21));
console.log(reverse(0));
console.log(reverse(1534236469));
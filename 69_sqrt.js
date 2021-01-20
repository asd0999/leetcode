/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    console.log(`\nx = ${x}`);
    if (x < 2) return x;

    let start = 0;
    let end = x;
    let mid = 0;

    while (start + 1 < end) {
        console.log(mid);
        mid = start + (end - start) / 2;
        if (mid * mid === x) {
            return mid;
        } else if (mid * mid > x) {
            end = mid;
        } else if (mid * mid < x) {
            start = mid;
        }
    }

    console.log(start, end);
    end = Math.floor(end);
    start = Math.floor(start);
    if (end * end == x) {
        return parseInt(end);
    } else {
        return parseInt(start);
    }

    // return parseInt(mid);
};

// check:
// console.log("Sqrt: ", mySqrt(4));
// console.log("Sqrt: ", mySqrt(5));
// console.log("Sqrt: ", mySqrt(8));
// console.log("Sqrt: ", mySqrt(9));
// console.log("Sqrt: ", mySqrt(10));
// console.log("Sqrt: ", mySqrt(16));
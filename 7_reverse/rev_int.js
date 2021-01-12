/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let m = 1;
    if (x < 0) {
        m = -1;
        x = Math.abs(x);
    }
    let soln = 0;

    while (x > 0) {
        let rem = x % 10;
        x = Math.floor(x / 10);
        soln = soln * 10 + rem;
    }

    soln *= m;

    if (soln < Math.pow(-2, 31) || soln > Math.pow(2, 31) - 1) return 0;

    return soln;
};

// check :
console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(21));
console.log(reverse(0));
console.log(reverse(1534236469));

/*
explanation
123
rem = 3
x = 12
soln = 3

12
rem = 2
x = 1
soln = 30 + 2 = 32

1
rem = 1
x = 0
soln = 320 + 1 = 321
*/
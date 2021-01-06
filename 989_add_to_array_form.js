/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function(A, K) {
    if (A.length > 10000 || K.length > 10000) return [0];
    let a = A;
    let b = [];
    let digits, adder;
    let diff;
    let soln = [];
    K.toString()
        .split("")
        .forEach((k) => {
            b.push(parseInt(k));
        });
    // console.log(a, b);
    let carryover = 0;
    let sum = 0;
    // let iteration = 0;
    if (a.length >= b.length) {
        digits = a;
        adder = b;
        diff = a.length - b.length;
    } else {
        adder = a;
        digits = b;
        diff = b.length - a.length;
    }

    adder = adder.reverse();
    for (let i = 0; i < diff; i++) {
        adder.push(0);
    }
    adder = adder.reverse();
    // console.log(digits, adder);

    for (let i = adder.length - 1; i >= 0; i--) {
        sum = digits[i] + adder[i] + carryover;
        carryover = 0;
        // console.log(i, sum, carryover);
        if (sum >= 10) {
            carryover = parseInt(sum / 10);
            carryover = 1;
            sum -= 10;
            // console.log(i, sum, carryover);
        }
        soln[i] = sum;
        sum = 0;
        // console.log(digits);
        // console.log("soln: ", soln);
        // console.log("carryover: ", carryover);
    }

    if (carryover > 0) {
        soln = soln.reverse();
        soln.push(carryover);
        soln = soln.reverse();
    }

    return soln;
};

// check :
console.log(addToArrayForm([0], 23));
console.log(addToArrayForm([2], 10000));
console.log(addToArrayForm([6, 5, 6], 6));
console.log(addToArrayForm([8, 8, 9], 16));
console.log(addToArrayForm([5, 8, 9, 3], 48));
console.log(addToArrayForm([1, 0], 11));
console.log(addToArrayForm([1, 2, 3], 5));
console.log(addToArrayForm([1, 2, 3, 0], 12));
console.log(addToArrayForm([9, 9, 9, 9, 9], 1));
console.log(addToArrayForm([2, 7, 4], 181));
console.log(addToArrayForm([2, 1, 5], 806));
console.log(addToArrayForm([1, 2, 1, 5], 806));
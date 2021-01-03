/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    //[1,2,3]
    let zeroCount = 0;
    // if (digits.length > 1) {
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] == 0) {
            zeroCount++;
        } else break;
    }
    // }
    let digitsStr = digits.join(""); //'123'
    console.log(digitsStr);
    let integer = parseInt(digitsStr) + 1; //124
    console.log(integer);
    digitsStr = integer.toString().split(""); //['1','2','4']
    console.log(digitsStr);
    let soln = [];

    if (zeroCount > 0) {
        while (zeroCount > 0) {
            soln.push(0);
            zeroCount--;
        }
    }
    digitsStr.forEach((i) => {
        soln.push(parseInt(i));
    });

    return soln;
};

// check :
// console.log(plusOne([0]));
// console.log(plusOne([0, 0]));
// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([1, 2, 3, 0]));
// console.log(plusOne([0, 0, 1, 2, 3, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
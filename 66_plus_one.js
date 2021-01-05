/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] == 9) {
            digits[i] = 0;
            if (digits[i - 1] && digits[i - 1] != 9) {
                digits[i - 1] += 1;
                i--;
                break;
            } else if (i == 0) {
                digits.push(1);
                digits = digits.reverse();
            }
        } else {
            digits[i] += 1;
            break;
        }
    }
    return digits;
};

// check :
console.log(plusOne([9]));
console.log(plusOne([9, 9]));
console.log(plusOne([9, 9, 9]));
console.log(plusOne([0, 0]));
console.log(plusOne([1, 2, 3]));
console.log(plusOne([1, 2, 3, 0]));
console.log(plusOne([0, 0, 1, 2, 3, 9]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 9]));
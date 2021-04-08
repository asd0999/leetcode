/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    salary.sort((a, b) => a - b);
    let sum = 0;
    let count = salary.length - 2;
    for (let i = 1; i < salary.length - 1; i++) {
        sum += salary[i];
    }
    return sum / count;
};

console.log(average([4000, 3000, 1000, 2000]));
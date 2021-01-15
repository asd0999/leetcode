/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let stairs = [];
    for (let i = 0; i < n; i++) {
        stairs.push(1);
    }

    function sum(items) {
        let sum = 0;
        for (let item of items) {
            sum += item;
        }
        return sum;
    }

    console.log(sum(stairs));
    console.log(stairs);
};

climbStairs(4);
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let max = prices[0];
    let diff = null;

    for (let i = 0; i < prices.length; i++) {
        let cur = prices[i];
        if (cur < min) {
            min = cur;
            max = cur;
        } else if (cur > max) {
            max = cur;
            diff = Math.max(max - min, diff);
        }
    }

    return diff;
};

// test :
// [3,2,6,5,0,3]
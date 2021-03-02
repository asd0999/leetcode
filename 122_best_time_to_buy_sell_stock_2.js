/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = null;
    let sell = null;
    let stock = false;
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        if (!stock) {
            if (prices[i] < prices[i + 1]) {
                buy = prices[i];
                stock = true;
                // console.log('buy', i)
            }
        } else {
            if (prices[i] > prices[i + 1] || i === prices.length - 1) {
                sell = prices[i];
                total += sell - buy;
                buy = null;
                sell = null;
                stock = false;
                // console.log('sell', i)
            }
        }
    }

    return total;
};

// test :
console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([1, 2, 3, 4, 5]));
console.log(maxProfit([2, 1, 2, 0, 1]));
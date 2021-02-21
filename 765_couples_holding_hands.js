/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    let swap = 0;
    innerFunk(row); //created new function for storing swap inside main function while still scope isolatin from the workings

    function innerFunk(row) {
        for (let i = 0; i < row.length; i += 2) {
            if (Math.abs(row[i] - row[i + 1]) !== 1) {
                let pairIndex;
                if (row[i] % 2 === 0) {
                    pairIndex = row.indexOf(row[i] + 1);
                } else {
                    pairIndex = row.indexOf(row[i] - 1);
                }
                let tmp = row[i + 1];
                row[i + 1] = row[pairIndex];
                row[pairIndex] = tmp;
                swap += 1;
                innerFunk(row);
            }
        }
    }
    console.log(row);
    return swap;
};

// test :
console.log(minSwapsCouples([3, 2, 0, 1]));
console.log(minSwapsCouples([0, 2, 1, 3]));
console.log(minSwapsCouples([0, 2, 4, 6, 7, 1, 3, 5]));
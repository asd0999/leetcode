/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    // solution 1 - original solution
    // let swap = 0;
    // innerFunk(row); //created new function for storing swap inside main function while still scope isolatin from the workings

    // function innerFunk(row) {
    //     for (let i = 0; i < row.length; i += 2) {
    //         if (Math.abs(row[i] - row[i + 1]) !== 1) {
    //             let pairIndex;
    //             if (row[i] % 2 === 0) {
    //                 pairIndex = row.indexOf(row[i] + 1);
    //             } else {
    //                 pairIndex = row.indexOf(row[i] - 1);
    //             }
    //             let tmp = row[i + 1];
    //             row[i + 1] = row[pairIndex];
    //             row[pairIndex] = tmp;
    //             swap += 1;
    //             innerFunk(row);
    //             break;
    //         }
    //     }
    // }
    // console.log(row);
    // return swap;

    //solution2 - using hashmap-uh (instead of doing indexOf)
    let map = new Map();
    let debug = true;
    for (let i = 0; i < row.length; i++) {
        map.set(row[i], i);
    }

    debug ? console.log("a", row) : null;

    let swaps = 0;
    for (let i = 0; i < row.length; i += 2) {
        debug ? console.log("b", row[i]) : null;
        let pair;
        row[i] % 2 === 0 ? (pair = row[i] + 1) : (pair = row[i] - 1);
        if (row[i + 1] !== pair) {
            swaps++;
            debug ? console.log("c", pair) : null;
            swap(i + 1, map.get(pair));
            debug ? console.log("d", row) : null;
        }
    }

    function swap(a, b) {
        let tmp = row[a];
        row[a] = row[b];
        row[b] = tmp;
        map.set(row[a], a);
        map.set(row[b], b);
    }
    debug ? console.log(row) : null;
    return swaps;
};

// test :
// console.log(minSwapsCouples([3, 2, 0, 1])); // 0
// console.log(minSwapsCouples([0, 2, 1, 3])); // 1
// console.log(minSwapsCouples([0, 2, 4, 6, 7, 1, 3, 5])); // 3
console.log(minSwapsCouples([5, 6, 4, 0, 2, 1, 9, 3, 8, 7, 11, 10])); // 4
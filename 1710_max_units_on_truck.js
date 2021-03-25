/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    let ordered = boxTypes.sort((a, b) => b[1] - a[1]);
    let totalBoxes = 0;
    let totalUnits = 0;
    for (let i = 0; i < ordered.length; i++) {
        let cur = ordered[i];
        for (let j = cur[0]; j >= 0; j--) {
            if (totalBoxes + j <= truckSize) {
                totalUnits += j * cur[1];
                totalBoxes += j;
                break;
            }
        }
    }
    return totalUnits;
};

console.log(
    maximumUnits(
        [
            [3, 1],
            [2, 2],
            [1, 3],
        ],
        4
    )
); //8

console.log(
    maximumUnits(
        [
            [5, 10],
            [2, 5],
            [4, 7],
            [3, 9],
        ],
        10
    )
); //91
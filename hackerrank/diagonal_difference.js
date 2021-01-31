function diagonalDifference(arr) {
    let d1 = 0;
    let d2 = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(i, j);
            if (i == j) {
                d1 += arr[i][j];
            }
            if (i + j == arr.length - 1) {
                d2 += arr[i][j];
            }
        }
    }
    console.log(d1, d2);
    return Math.abs(d1 - d2);
}

console.log(
    diagonalDifference([
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12],
    ])
);
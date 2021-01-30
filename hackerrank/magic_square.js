function formingMagicSquare(s) {
    const magic_squares = [
        [
            [8, 1, 6],
            [3, 5, 7],
            [4, 9, 2],
        ],
        [
            [6, 1, 8],
            [7, 5, 3],
            [2, 9, 4],
        ],
        [
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6],
        ],
        [
            [2, 9, 4],
            [7, 5, 3],
            [6, 1, 8],
        ],
        [
            [8, 3, 4],
            [1, 5, 9],
            [6, 7, 2],
        ],
        [
            [4, 3, 8],
            [9, 5, 1],
            [2, 7, 6],
        ],
        [
            [6, 7, 2],
            [1, 5, 9],
            [8, 3, 4],
        ],
        [
            [2, 7, 6],
            [9, 5, 1],
            [4, 3, 8],
        ],
    ];

    let temp = [];
    let ms_1d = [];
    for (let i = 0; i < magic_squares.length; i++) {
        temp = [].concat(...magic_squares[i]);
        ms_1d.push(temp);
    }

    let s_1d = [].concat(...s);

    let costs = [];
    for (let i = 0; i < ms_1d.length; i++) {
        let cost = 0;
        for (let j = 0; j < s_1d.length; j++) {
            cost += Math.abs(s_1d[j] - ms_1d[i][j]);
        }
        costs.push(cost);
    }

    return Math.min(...costs);
}

console.log(
    formingMagicSquare([
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 5],
    ])
);
console.log(
    formingMagicSquare([
        [4, 8, 2],
        [4, 5, 7],
        [6, 1, 6],
    ])
);
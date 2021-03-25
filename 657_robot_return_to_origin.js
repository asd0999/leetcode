/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let mapping = {
        U: [0, 1],
        D: [0, -1],
        L: [-1, 0],
        R: [1, 0],
    };
    let x = 0;
    let y = 0;
    for (let i = 0; i < moves.length; i++) {
        let move = moves[i];
        x += mapping[move][0];
        y += mapping[move][1];
    }

    return !x && !y ? true : false;
};

console.log(judgeCircle("UD"));
console.log(judgeCircle("RRDD"));
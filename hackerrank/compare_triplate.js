function compareTriplets(a, b) {
    let soln = [0, 0];
    for (let i = 0; i < 3; i++) {
        if (a[i] > b[i]) {
            soln[0] += 1;
        } else if (a[i] < b[i]) {
            soln[1] += 1;
        }
    }
    return soln;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8]));
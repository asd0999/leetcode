function jumpingOnClouds(c) {
    let numOfSteps = 0;
    for (let i = 0; i < c.length - 1; i++) {
        // console.log(i, numOfSteps);
        if (c[i + 2] == 0) {
            i++;
        }
        numOfSteps++;
    }

    return numOfSteps;
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));
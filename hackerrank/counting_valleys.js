function countingValleys(steps, path) {
    // Write your code here
    const stepsArr = path.split("");
    console.log(stepsArr);
    let sealevel = 0;
    let prev_sealevel = 0;
    let valleycount = 0;
    for (let i = 0; i < steps; i++) {
        prev_sealevel = sealevel;
        stepsArr[i] == "U" ? (sealevel += 1) : (sealevel -= 1);
        if (prev_sealevel < 0 && sealevel == 0) {
            console.log("got one!");
            valleycount += 1;
        }
    }

    return valleycount;
}

console.log(countingValleys(8, "UDDDUDUU"));
console.log(countingValleys(12, "DDUUDDUDUUUD"));
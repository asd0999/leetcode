function hurdleRace(k, height) {
    const result = height.reduce((acc, h) => {
        return (acc > h ? acc : h)
    }, 0)

    return (result - k > 0 ? result - k : 0);
}

console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
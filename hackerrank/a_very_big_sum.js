function averybigsum(ar) {
    const total = ar.reduce((acc, num) => {
        return acc + num;
    }, 0);
    return total;
}

console.log(averybigsum([3, 5, 4]));
console.log(averybigsum([1231423, 9429753045, 207239423]));
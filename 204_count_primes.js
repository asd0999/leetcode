/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let primes = [];
    for (let i = 0; i < n; i++) {
        primes[i] = true;
    }

    for (let i = 2; i * i < n; i++) {
        if (primes[i]) {
            for (let j = i; j * i < n; j++) {
                primes[i * j] = false;
            }
        }
    }
    let count = 0;
    for (let c = 2; c < n; c++) {
        if (primes[c] === true) {
            count++;
        }
    }
    // console.log(primes);
    return count;
};

console.log(countPrimes(10));
console.log(countPrimes(100));
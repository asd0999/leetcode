function sockMerchant(n, ar) {
    let pairs = 0;
    ar.sort();
    // console.log(ar);
    for (let i = 0; i < n; i++) {
        if (ar[i] == ar[i + 1]) {
            pairs += 1;
            i++;
        }
    }
    return pairs;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
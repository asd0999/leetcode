function plusMinus(arr) {
    let plus, minus, zero;
    plus = minus = zero = 0;
    // let result = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num < 0) {
            minus++;
        } else if (num == 0) {
            zero++;
        } else if (num > 0) {
            plus++;
        }
    }

    console.log((plus / arr.length).toFixed(6));
    console.log((minus / arr.length).toFixed(6));
    console.log((zero / arr.length).toFixed(6));

    // return result;
}

plusMinus([-4, 3, -9, 0, 4, 1]);
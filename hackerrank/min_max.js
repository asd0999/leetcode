function miniMaxSum(arr) {
    let total = 0;
    let min = arr[0];
    let max = arr[0];
    for (let i=0; i<arr.length; i++){
        total += arr[i]
        if (min > arr[i]) {
            min = arr[i]
        }
        if (max < arr[i]) {
            max = arr[i]
        }
    }
    console.log(total-max, total-min);

}

miniMaxSum([1,2,3,4,5]);


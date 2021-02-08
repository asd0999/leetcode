function birthdayCakeCandles(candles) {
    // Write your code here
    let count = 0;
    let max = candles[0];
    for (let i=0; i<candles.length; i++){
        if(max < candles[i]){
            max = candles[i]
            count = 1
        } else if (max == candles[i]) {
            count += 1
        }
    }
    
    return count;
}

console.log(birthdayCakeCandles([4,2,3,1,4]));

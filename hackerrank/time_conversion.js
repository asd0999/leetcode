function timeConversion(s) {
    /*
     * Write your code here.
     */
    let time_split = s.split(":");
    let last = time_split[2].split("");
    let m = last.splice(2, 2);
    time_split[2] = last.join("");

    // console.log(time_split); //12 32 44
    // console.log(m); //p m

    if (m[0] === 'A') {
        if (time_split[0] === '12') {
            time_split[0] = '00';
        }
    } else {
        if (time_split[0] !== '12') {
            time_split[0] = (parseInt(time_split[0]) + 12).toString();
        }
    }
    let result = time_split.join(":")
    return result;
}

console.log(timeConversion('12:32:44PM'));
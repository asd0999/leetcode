var UndergroundSystem = function() {
    this.custMap = new Map();
    this.avgTime = new Map();
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.custMap.set(id, { stationName, t });
    // console.log(this.custMap.get(id))
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    let checkIn = this.custMap.get(id);
    if (checkIn) {
        let startStation = checkIn.stationName;
        let startTime = checkIn.t;
        let stationString = startStation + "-" + stationName;
        if (!this.avgTime.get(stationString)) {
            this.avgTime.set(stationString, { sum: t - startTime, count: 1 });
            // console.log(this.avgTime);
        } else {
            let curSum = this.avgTime.get(stationString).sum;
            let curCount = this.avgTime.get(stationString).count;
            this.avgTime.set(stationString, {
                sum: curSum + t - startTime,
                count: curCount + 1,
            });
        }
    } else {
        return;
    }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(
    startStation,
    endStation
) {
    let stationString = startStation + "-" + endStation;
    let key = this.avgTime.get(stationString);
    let average;
    if (key) {
        average = key.sum / key.count;
    }
    return average.toFixed(5);
};

/**
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */
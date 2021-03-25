/**
 * Initialize your data structure here.
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.size = size;
    this.array = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    this.array.push(val);
    let sum = 0;
    let count = 0;
    if (this.array.length < this.size) {
        for (let i = 0; i < this.array.length; i++) {
            sum += this.array[i];
            count++;
        }
        return sum / count;
    }
    for (let i = this.array.length - 1; i >= this.array.length - this.size; i--) {
        sum += this.array[i];
        count++;
    }
    return sum / count;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
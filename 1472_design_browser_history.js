/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.currentIndex = 0;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.length = this.currentIndex + 1;
    this.history.push(url);
    this.currentIndex += 1;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.currentIndex = steps > this.currentIndex ? 0 : this.currentIndex - steps;
    // this.currentIndex = newIndex;
    // console.log(this.history, newIndex);

    return this.history[this.currentIndex];
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.currentIndex =
        steps > this.history.length - 1 - this.currentIndex ?
        this.history.length - 1 :
        this.currentIndex + steps;
    // this.currentIndex = newIndex;
    return this.history[this.currentIndex];
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

// test input set:
// ["BrowserHistory","visit","visit","visit","back","back","forward","visit","forward","back","back"]
// [["leetcode.com"],["google.com"],["facebook.com"],["youtube.com"],[1],[1],[1],["linkedin.com"],[2],[2],[7]]
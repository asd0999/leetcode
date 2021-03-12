/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.deck = [...nums];
    this.len = nums.length;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    return this.deck;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    //solution 2 - imitating how cards are actually shuffled, exchangin cards - O(N) time
    let shuffled = [...this.deck];
    for (let i = this.len - 1; i >= 0; i--) {
        let r = Math.floor(Math.random() * (this.len - i));
        [shuffled[i], shuffled[r]] = [shuffled[r], shuffled[i]];
    }
    return shuffled;

    // solution 1 - simpler solution - Nlog(O(N)) time
    let randIndex = [];
    let m = {};
    for (let i = 0; i < this.len; i++) {
        randIndex.push(Math.random());
        m[randIndex[i]] = this.deck[i];
    }

    let shuffle = Object.keys(m).sort((a, b) => a - b);
    for (let i = 0; i < this.len; i++) {
        shuffle[i] = m[shuffle[i]];
    }
    return shuffle;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
var obj = new Solution([1, 2, 3, 4]);
var param_2 = console.log(obj.shuffle());
var param_1 = console.log(obj.reset());
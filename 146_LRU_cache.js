// solution 1 - using just Map bc javascript preserves order in Map (what!)
// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {
//     this.capacity = capacity;
//     this.cache = new Map();
// };

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     if (this.cache.has(key)) {
//         let value = this.cache.get(key);
//         this.cache.delete(key);
//         this.cache.set(key, value);
//         return value;
//     }
//     return -1;
// };

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     if (this.cache.get(key)) {
//         this.cache.delete(key);
//         this.cache.set(key, value);
//     } else if (this.cache.size === this.capacity) {
//         for (const [key] of this.cache) {
//             this.cache.delete(key);
//             break;
//         }
//     }
//     this.cache.set(key, value);
// };

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */

// solution 2 - using a map and an order preserving data structure (eg. array) with constant time complexity for removing items (oh, then not array but linked list)

class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.get(key)) {
        let cur = this.map.get(key);
        const value = cur.val;
        if (this.head === cur) {
            if (cur.next) {
                let other = cur.next;
                cur.prev = other;
                other.prev = null;
                other.next = cur;
                cur.next = null;
                this.head = other;
            }
        }
        return value;
    } else {
        return -1;
    }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let cur = this.map.get(key);
    if (cur) {
        const node = new Node(key, value);
        this.map.set(key, node);
        if (!this.head === cur) {
            this.head.next = node;
            node.prev = this.head;
        } else {
            if (cur.next) {
                this.head = cur.next;
                this.head.next = node;
                node.prev = this.head;
                this.head.prev = null;
            } else {
                this.head = node;
            }
        }
    } else if (this.map.size === this.capacity) {
        this.map.delete(this.head.key);
        this.head = this.head.next;
        this.head.prev = null;
        const node = new Node(key, value);
        this.map.set(key, node);
        this.head.next = node;
        node.prev = this.head;
    } else {
        const node = new Node(key, value);
        this.map.set(key, node);
        if (!this.head) {
            this.head = node;
        } else {
            this.head.next = node;
        }
    }
    return this.head;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// test set 1:
// var obj = new LRUCache(2);
// console.log(obj.get(1));
// console.log(obj.put(1, 2));
// console.log(obj.put(1, 1));
// console.log(obj.get(1));
// console.log(obj.get(2));
// console.log(obj.put(2, 2));
// console.log(obj.put(3, 3));
// console.log(obj.get(1));
// console.log(obj.get(2));
// console.log(obj.get(3));

var obj = new LRUCache(1);
console.log(obj.put(2, 1));
console.log(obj.get(2));
console.log(obj.put(3, 2));
console.log(obj.get(2));
console.log(obj.get(3));
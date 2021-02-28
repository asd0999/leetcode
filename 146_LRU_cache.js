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
    this.tail = null;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    // console.log(this.map);
    if (this.map.get(key)) {
        let cur = this.map.get(key);
        const value = cur.val;
        // console.log("tail: ", this.tail);
        if (this.map.size === 1) {
            return value;
        }
        if (this.head === cur) {
            this.head = this.head.next;
            this.head.prev = null;
        }
        if (this.tail !== cur) {
            if (cur.prev) {
                cur.prev.next = cur.next;
            }
            if (cur.next) {
                cur.next.prev = cur.prev;
            }
            this.tail.next = cur;
            cur.prev = this.tail;
            this.tail = cur;
            cur.next = null;
        }
        console.log(">>>> ", this.map);
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
    // console.log("whats is cur? ", cur);
    if (cur) {
        console.log(">>>> key exists, running update!");
        cur.val = value;
        if (cur.prev) {
            cur.prev.next = cur.next || cur;
        }
        if (cur.next) {
            cur.next.prev = cur.prev || cur;
        }
        if (this.head == cur && cur.next) {
            this.head = cur.next;
            this.head.prev = null;
        }
        if (this.tail !== cur) {
            this.tail.next = cur;
            cur.prev = this.tail;
            this.tail = cur;
            cur.next = null;
        }
    } else {
        const node = new Node(key, value);
        if (!this.tail) {
            console.log(">>>> no head/tail, create first node");
            this.head = node;
            this.tail = node;
            this.map.set(key, node);
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.map.set(key, node);
            console.log(
                ">>>> head/tail exists, adding to tail. map size: ",
                this.map.size
            );
            if (this.map.size > this.capacity) {
                this.map.delete(this.head.key);
                this.head = this.head.next;
                this.head.prev = null;
                console.log(
                    ">>>> but size > cap, deleting head, map size: ",
                    this.map.size
                );
            }
        }
    }
    // console.log(this.map);
    return this.head;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// test set 1:
var obj = new LRUCache(2);
console.log(obj.get(1));
console.log(obj.put(1, 2));
console.log(obj.put(1, 1));
console.log(obj.get(1));
console.log(obj.get(2));
console.log(obj.put(2, 2));
console.log(obj.put(3, 3));
console.log(obj.get(1));
console.log(obj.get(2));
console.log(obj.get(3));

// test set 2:
var obj = new LRUCache(2);
console.log(obj.put(1, 4));
console.log(obj.put(1, 1));
console.log(obj.put(2, 2));
console.log(obj.get(1));
console.log(obj.put(3, 3));
console.log(obj.get(2));
console.log(obj.put(4, 4));
console.log(obj.get(1));
console.log(obj.get(3));
console.log(obj.get(4));

// test set 3:
var obj = new LRUCache(1);
console.log(obj.put(2, 1));
console.log(obj.get(2));
console.log(obj.put(3, 2));
console.log(obj.get(2));
console.log(obj.get(3));
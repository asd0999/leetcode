////////run with node////////
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    get(index) {
        if (index < 0 || index >= this.size) return -1;

        let cur = this.head;
        for (let i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.val;
    }

    addAtHead(val) {
        let newNode = new Node(val);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        console.log(this.head);
    }

    addAtTail(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let cur = this.head;
            while (cur.next !== null) {
                cur = cur.next;
            }
            cur.next = newNode;
        }
        this.size++;
        console.log(this.head);
    }

    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return;
        if (index === 0) {
            this.addAtHead(val);
            return;
        }
        if (index === this.size) {
            this.addAtTail(val);
            return;
        }
        let newNode = new Node(val);
        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        newNode.next = cur.next;
        cur.next = newNode;
        this.size++;
        console.log(this.head);
        return cur.val;
    }

    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) return;
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let cur = this.head;
        for (let i = 0; i < index - 1; i++) {
            cur = cur.next;
        }
        cur.next = cur.next.next;
        this.size--;
        console.log(this.head);
    }
}

let list = new LinkedList();
let newNode = new Node(1);

list.addAtHead(1);
console.log(list.get(0));
console.log(list.get(1));
list.addAtHead(3);
console.log(list.get(0));
list.addAtTail(5);
list.deleteAtIndex(1);
list.addAtIndex(1, 4);
console.log(list.get(1));
list.addAtIndex(0, 2);
list.addAtHead(1);
console.log(list.get(0));
console.log(list.get(1));
console.log(list.get(2));
console.log(list.get(3));
console.log(list.get(4));
console.log(list.get(5));

////////leetcode solution////////
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }

// /**
//  * Initialize your data structure here.
//  */
// var MyLinkedList = function() {
//     this.head = null;
//     this.size = 0;
// }

// /**
//  * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
//     if (index < 0 || index >= this.size) return -1;

//     let cur = this.head;
//     for (let i = 0; i < index; i++) {
//         cur = cur.next;
//     }

//     return cur.val;
// }

// /**
//  * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//     let newNode = new Node(val);
//     newNode.next = this.head
//     this.head = newNode;
//     this.size++;
// }

// /**
//  * Append a node of value val to the last element of the linked list.
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//     let newNode = new Node(val);
//     if (this.head === null) {
//         this.head = newNode;
//     } else {
//         let cur = this.head;
//         while (cur.next !== null) {
//             cur = cur.next;
//         }
//         cur.next = newNode;
//     }
//     this.size++;
// }

// /**
//  * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//     if (index < 0 || index > this.size) return;
//     if (index === 0) {
//         this.addAtHead(val)
//         return;
//     }
//     if (index === this.size) {
//         this.addAtTail(val);
//         return;
//     }
//     let newNode = new Node(val);
//     let cur = this.head;
//     for (let i = 0; i < index - 1; i++) {
//         cur = cur.next;
//     }
//     newNode.next = cur.next;
//     cur.next = newNode;
//     this.size++;
//     return cur.val;
// }

// /**
//  * Delete the index-th node in the linked list, if the index is valid.
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if (index < 0 || index >= this.size) return;
//     if (index === 0) {
//         this.head = this.head.next;
//         return;
//     }

//     let cur = this.head;
//     for (let i = 0; i < index - 1; i++) {
//         cur = cur.next;
//     }
//     cur.next = cur.next.next;
//     this.size--;
// }

// doubly linked list solution
// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//         this.prev = null;
//     }
// }

// /**
//  * Initialize your data structure here.
//  */
// var MyLinkedList = function() {
//     this.head = null;
//     this.size = 0;
// }

// /**
//  * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
//     if(index <0 || index >= this.size) return -1;

//     let cur = this.head;
//     for (let i = 0; i < index; i++) {
//         cur = cur.next;
//     }

//     return cur.val;
// }

// /**
//  * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {
//     let newNode = new Node(val);
//     newNode.next = this.head
//     if(this.head){
//     this.head.prev = newNode;
//     }

//     this.head = newNode;
//     this.size++;
// }

// /**
//  * Append a node of value val to the last element of the linked list.
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {
//     let newNode = new Node(val);
//     if(this.head === null){
//         this.head = newNode;
//     } else {
//         let cur = this.head;
//         while(cur.next !== null){
//             cur = cur.next;
//         }
//         cur.next = newNode;
//         newNode.prev = cur;
//     }
//         this.size++;
// }

// /**
//  * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//     if(index <0 || index > this.size) return;
//     if(index === 0){
//         this.addAtHead(val)
//         return;
//     }
//     let newNode = new Node(val);
//     let cur = this.head;
//     for (let i = 0; i < index - 1; i++) {
//         cur = cur.next;
//     }
//     newNode.prev = cur;
//     newNode.next = cur.next;
//     if(cur.next !== null){
//         newNode.next.prev = newNode;
//     }
//     cur.next = newNode;
//     this.size++;
//     return cur.val;
// }

// /**
//  * Delete the index-th node in the linked list, if the index is valid.
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if(index <0 || index>=this.size) return;
//     if(index === 0) {
//         this.head  = this.head.next;
//         return;
//     }
//     let cur = this.head;
//     for (let i = 0; i < index - 1; i++) {
//         cur = cur.next;
//     }
//     let prevNode = cur;
//     let nextNode = cur.next.next;
//     prevNode.next = nextNode;
//     if(nextNode !== null){
//         nextNode.prev = prevNode;
//     }

//     this.size--;
//     return;
// }
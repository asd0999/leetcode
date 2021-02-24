/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    //     //original linked list
    //     let original = [];
    //     let cur = head;
    //     while (cur != null) {
    //         original.push(cur.val);
    //         cur = cur.next;
    //     }
    //     // console.log(original);

    //     //reverse linked list
    //     let reverse = [];
    //     cur = head;
    //     let next = null;
    //     let prev = null;
    //     while (head) {
    //         next = head.next;
    //         head.next = prev;
    //         prev = head;
    //         head = next;
    //     }

    //     cur = prev;
    //     while (cur != null) {
    //         reverse.push(cur.val);
    //         cur = cur.next;
    //     }
    //     // console.log(reverse);

    //     return original.every((val, i) => val === reverse[i]);

    // solution 2 - without converting to arrays to check (this is faster than other solutions)
    //find size of linked list
    let size = 0;
    let cur = head;
    while (cur != null) {
        cur = cur.next;
        size++;
    }

    //go to second half of linked list
    cur = head;
    for (let i = 0; i < Math.ceil(size / 2); i++) {
        cur = cur.next;
    }
    let first = head;
    let second = cur;
    // console.log(first, second);

    //reverse second half of the linked list
    newHead = second;
    let next = null;
    let prev = null;
    while (newHead) {
        next = newHead.next;
        newHead.next = prev;
        prev = newHead;
        newHead = next;
    }
    second = prev;
    // console.log(first, second);

    //go over first and second half of linked list comparing values at each node
    for (let i = 0; i < Math.floor(size / 2); i++) {
        if (first.val === second.val) {
            first = first.next;
            second = second.next;
        } else {
            return false;
        }
    }
    return true;
};
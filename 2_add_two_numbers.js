/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let newHead = new ListNode(0);
    let cur = newHead;
    let sum = 0;
    let carryover = 0;

    while (l1 !== null || l2 !== null) {
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carryover;
        // console.log(sum);
        carryover = Math.floor(sum / 10);
        let node = new ListNode(sum % 10);
        cur.next = node;
        cur = cur.next;
        l1 ? (l1 = l1.next) : (l1 = null);
        l2 ? (l2 = l2.next) : (l2 = null);

        // console.log(newHead);
    }

    if (carryover > 0) {
        cur.next = new ListNode(carryover);
    }

    return newHead.next;
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let cur = head;
    let size = 0;
    while (cur !== null) {
        cur = cur.next;
        size++;
    }

    if (size === 1 && n === 1) {
        head = null;
        return head;
    }

    let index = size - n;
    cur = head;

    if (index === 0) {
        head = cur.next;
    }

    for (let i = 0; i < index - 1; i++) {
        cur = cur.next;
    }

    cur.next = cur.next.next || null;
    return head;
};
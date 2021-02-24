/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let tortoise = head;
    let hare = head;
    while (tortoise) {
        tortoise = tortoise.next;
        if (hare.next === null || hare.next.next === null) return null;
        hare = hare.next.next;
        if (tortoise === hare) {
            break;
        }
    }
    let ptr1 = tortoise;
    let ptr2 = head;
    while (ptr1 !== ptr2) {
        ptr1 = ptr1.next;
        ptr2 = ptr2.next;
    }
    return ptr1;
};
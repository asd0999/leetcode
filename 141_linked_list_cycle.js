/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let tortoise = head;
    let hare = head;
    while (tortoise) {
        tortoise = tortoise.next;
        if (hare.next === null || hare.next.next === null) return false;
        hare = hare.next.next;
        if (tortoise === hare) {
            return true;
        }
    }
    return false;
};
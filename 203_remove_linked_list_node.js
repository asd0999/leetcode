/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let h = new ListNode(-1);
    h.next = head;
    head = h;

    let cur = head.next;
    let prev = head;
    while (cur !== null) {
        if (cur.val === val) {
            prev.next = cur.next;
            cur = cur.next;
        } else {
            prev = cur;
            cur = cur.next;
        }
    }
    return head.next;
};
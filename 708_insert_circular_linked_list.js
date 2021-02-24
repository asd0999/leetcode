/**
 * // Definition for a Node.
 * function Node(val, next) {
 *     this.val = val;
 *     this.next = next;
 * };
 */

/**
 * @param {Node} head
 * @param {number} insertVal
 * @return {Node}
 */
var insert = function(head, insertVal) {
    if (head === null) {
        head = new ListNode(insertVal);
        head.next = head;
        return head;
    }

    let max = head;
    while (max.next !== head && max.val <= max.next.val) {
        max = max.next;
    }
    let min = max.next;
    console.log(max, min);
    let cur = min;
    if (insertVal >= max.val || insertVal <= min.val) {
        let node = new ListNode(insertVal, min);
        max.next = node;
    } else {
        while (cur.next.val < insertVal) {
            cur = cur.next;
        }
        let node = new ListNode(insertVal, cur.next);
        cur.next = node;
    }
    return head;
};

//[1,3,5], 2 --> [1,2,3,4]
//[3,4,1], 2 --> [3,4,1,2]
//[3,3,5], 0 --> [0,3,3,5]
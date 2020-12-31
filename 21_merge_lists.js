// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let newHead = new ListNode();
    let cur = newHead;
    console.log(l1, l2);
    console.log(cur);

    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    while (l1) {
        cur.next = l1;
        l1 = l1.next;
        cur = cur.next;
    }

    while (l2) {
        cur.next = l2;
        l2 = l2.next;
        cur = cur.next;
    }

    return newHead.next;
};

//to crete a list with nodes l1 and l2
// let l1 = new ListNode();
// l1.val = 1;
// l1.next = null;
// console.log(l1);
// let l2 = new ListNode();
// l2.val = 2;
// l2.next = null;
// l1.next = l2;
// console.log(l1);
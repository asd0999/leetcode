/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let curA = headA;
    let sizeA = 0;
    while (curA !== null) {
        curA = curA.next;
        sizeA++;
    }

    let curB = headB;
    let sizeB = 0;
    while (curB !== null) {
        curB = curB.next;
        sizeB++;
    }

    // console.log(sizeA, sizeB);
    let longer;
    sizeA > sizeB ? (longer = headA) : (longer = headB);
    longer === headA ? (shorter = headB) : (shorter = headA);

    for (let i = 0; i < Math.abs(sizeA - sizeB); i++) {
        longer = longer.next;
    }

    while (longer !== shorter) {
        longer = longer.next;
        shorter = shorter.next;
    }
    return longer;
};
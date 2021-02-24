/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    let cur = head;
    let size = 0;
    while (cur !== null) {
        cur = cur.next;
        size++;
    }
    // console.log(size);
    cur = head;
    for (let i = 0; i < Math.floor(size / 2); i++) {
        let even = cur.next;
        cur.next = cur.next.next;

        let traverse = head;
        while (traverse.next !== null) {
            traverse = traverse.next;
        }
        traverse.next = even;
        even.next = null;
        cur = cur.next;
        // console.log(head);
    }
    return head;
};

// test (cant run here with the list and node definitions):
console.log(oddEvenList([1, 2, 3, 4, 5])); //[1,3,5,2,4]
console.log(oddEvenList([2, 1, 3, 5, 6, 4, 7])); //[2,3,6,7,1,5,4]
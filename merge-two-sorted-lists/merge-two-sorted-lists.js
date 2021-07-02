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

// input: two sorted linked lists
// ouutput: a sorted linked list continging the vals from the two inputs
// constraints: must be spliced together
// edge: list are not same length
// approach:

var mergeTwoLists = function(l1, l2) {
    let list = new ListNode();
    let head = list;
    
    while (l1 && l2) {
        if (l1.val < l2.val) {
            list.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            list.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        
        list = list.next;
    }
    
    list.next = l1 || l2;
    
    return head.next; 
};
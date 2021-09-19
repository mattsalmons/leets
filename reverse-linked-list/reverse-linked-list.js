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
var reverseList = function(head) {
//     var node = head;
//     var previous = null;

//     while (node) {
//         // save next or you lose it!!!
//         var save = node.next;
//         // reverse pointer
//         node.next = previous;
//         // increment previous to current node
//         previous = node;
//         // increment node to next node or null at end of list
//         node = save;
//     }
//   return previous;   // Change the list head !!!
    
    let previous = null;
    
    while (head) {
        let next = head.next;
        head.next = previous;
        previous = head;
        head = next;
    };
    
    return previous;
};
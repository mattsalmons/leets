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

// input: 2 linked lists representing integers whose digits are stored in reverse order
// output: a linked list representing the sum of the two input lists
// method:
//  interate over lists in reverse
//      collect digits and convert to numbers
var addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0);
    let head = list;
    let sum = 0;
    let carry = 0;
    
    while (l1 || l2 || sum) {
        if (l1) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }
        
        head.next = new ListNode(sum);
        head = head.next;
        
        sum = carry;
        carry = 0;
    }
    
    return list.next;
};
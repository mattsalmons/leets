/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) return true;
    
    let vals = [head.val];
    
    while (head.next) {
        head = head.next;
        vals.push(head.val);
    }
    
    let start = 0;
    let end = vals.length - 1;
    
    while (start < end) {
        if (vals[start] === vals[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    
    return true;
};
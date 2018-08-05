/*
	21. 合并两个有序链表
		将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let l3 = new ListNode(0);
    let p = l1, q = l2, r = l3;
    while(p != null && q != null) {
        if (p.val <= q.val) {
            r.next = p;
            r = r.next;
            p = p.next;
        } else {
            r.next = q;
            r = r.next;
            q = q.next;
        }
    }
    r.next = null;
    if (q != null) {
        r.next = q;
    }
    if (p != null) {
        r.next = p;
    }
    l3 = l3.next;
    return l3;
};


// 更好的实现
var mergeTwoLists = function(l1, l2) {
    if(!l1){
        return l2
    }    
    if(!l2){
        return l1
    }
    var head
    if(l1.val > l2.val){
        head = l2
        l2 = l2.next
    } else {
        head = l1
        l1 = l1.next
    }
    head.next = mergeTwoLists(l1, l2)
    return head
};

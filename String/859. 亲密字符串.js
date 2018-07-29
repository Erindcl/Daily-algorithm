/*
	859. 亲密字符串
		给定两个由小写字母构成的字符串 A 和 B ，只要我们可以通过交换 A 中的两个字母得到与 B 相等的结果，就返回 true ；否则返回 false 。
    分析：出现亲密字符串的结果有两种：第一种是两个字符串有且只有两个位置的字符不相同且并且交换两个位置的字符能使两字符串相同，另一种情况是两个字符串完全相同并且字符串中存在至少有一个字符出现了两次的情况，此时交换这两个相同的字符也可使两字符串相同。在代码中首先判断两字符串长度是否相同，长度不同无论怎么交换字符也不能使两字符串相等。接下来设置一个数组存放遍历字符串得到的两字符串不相等的字符索引。根据数组长度及内容判断两字符串是否为亲密字符串。当数组长度为0时，判断字符串中是否有相同字符元素，如果有则返回true，如果没有则返回false。当数组长度为2时，判断A[k]与[j]、A[j]与B[k]是否都相等，相等则返回true，不相等返回false。当数组长度为其余数的时候，都返回false。
*/

var buddyStrings = function(A, B) {
    let lenA = A.length, lenB = B.length, arr = [];
    if (lenA != lenB) {
        return false;
    }
    for (let i = 0; i < lenA; i++) {
        if (A[i] != B[i]) {
            arr.push(i);
        }
    }
    if (arr.length == 2) {
        let j = arr[0], k = arr[1];
        if (A[k] == B[j] && A[j] == B[k]) {
            return true;
        } else {
            return false;
        }
    } else if (arr.length == 0) {
        let temArr = new Set(A.split(""));
        if (temArr.size < lenA) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

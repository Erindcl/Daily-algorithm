/*
	680. 验证回文字符串 Ⅱ
		给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。
    分析：设置字符串的首尾指针i和j，利用指针比较字符串首尾的字符，如果遇到不相等的情况，分别截取包含s[i]~s[j-1]和s[i+1]~s[j]的子字符串，并判断两个子字符串是否为回文字符串，如果两者有其一满足回文字符串的条件则返回true，若两子字符串都不满足回文字符串的条件则返回false。如果在整个字符串的比较过程中没有出现不相等的情况则返回true。
*/

var validPalindrome = function(s) {
    var i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] == s[j]) {
            i++;
            j--;
        } else {
            var subS1 = s.slice(i,j);
            var subS2 = s.slice(i+1,j+1);
            if (subS1 == subS1.split("").reverse().join("")) {
                return true;
            } else if (subS2 == subS2.split("").reverse().join("")) {
                return true;
            } else {
                return false;
            }
        }
    }
    return true;
};

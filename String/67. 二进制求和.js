/*
	67. 二进制求和
		给定两个二进制字符串，返回他们的和（用二进制表示）。输入为非空字符串且只包含数字 1 和 0。
    分析：为了方便后续的操作，需要将两字符串的长度设置为一样，所以在长度不足的字符串前面添加足够数目的0。从后往前遍历字符串，设置一个变量count表示是否需要进位，需要进位设count为1，无需进位则设count为0,设置数组存放计算后的结果。通过switch语句计算判断count、a[i]与b[i]三者和是多少，根据结果判断是否需要进位和当前值应设置为多少。判断到最好如果count值为1说明需还需要向前进一位。故向数组首部添加一个1
*/

var addBinary = function(a, b) {
    let arr = [];
    let count = 0, aLen = a.length, bLen = b.length;
    let temS = "0".repeat(Math.abs(aLen - bLen));
    if (aLen > bLen) {
        b = temS + b;
    } else {
        a = temS + a;
    }
    for (let i = Math.max(aLen,bLen) - 1; i >= 0; i--) {
        switch (count + Number(a[i]) + Number(b[i])) {
            case 3:
                arr.unshift("1");
                count = 1;
                break;
            case 2:
                arr.unshift("0");
                count = 1;
                break;
            case 1:
                arr.unshift("1");
                count = 0;
                break;
            default:
                arr.unshift("0");
                count = 0;
        }
    }
    if (count == 1) {
        arr.unshift("1");
    }
    return arr.join("");
};

// 其他实现：
var addBinary = function(a, b) {
    let [i, j, c, s] = [a.length - 1, b.length - 1, 0, '']

    while (i >= 0 || j >= 0 || c === 1) {
        c += +(a[i--] || 0) + +(b[j--] || 0)
        s = (c & 1) + s
        c = c >> 1
    }
    return s
};

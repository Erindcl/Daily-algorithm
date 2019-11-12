// 题目：
// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

// 暴力解题
// 时间复杂度：O(n^2)
// 空间复杂度：O(n)
// 列举出所有子串，然后寻找有效的子串，最后比较长度
longestValidParentheses = (s) => {
    let maxLen = 0;
    let len = s.length;

    let isLegal = (str) => {
        let stack = [];
        for (let i = 0, len = str.length; i < len; i++) {
            if (str[i] == '(') {
                stack.push(str[i]);
            } else {
                if (stack.length == 0) {
                    return false;
                }
                stack.pop();
            }
        }
        return stack.length == 0;
    }

    for (let i = 0; i < len; i++) {
        for (let j = i + 2; j <= len; j += 2) {
            if (isLegal(s.slice(i, j))) {
                maxLen = Math.max(j - i, maxLen);
            }
        }
    }

    return maxLen;
}

// 栈
// 时间复杂度：O(n)
// 空间复杂度：O(n)

// 思路：
// 遍历整个字符串，左括号就入栈，右括号就出栈。当出栈的时候计算两个字符的间隔就可以求到该合法字符的长度了。
// 为了方便计算间隔，入栈的时候就保留当前元素的下标

// 具体算法：
// 从左到右扫描字符串，栈顶保存当前扫描的时候，合法序列前的一个位置位置下标是多少
// 我们扫描到左括号，就将当前位置入栈。 
// 扫描到右括号，就将栈顶出栈（代表栈顶的左括号匹配到了右括号），出栈之后，栈分两种情况：

// 栈不空，那么就用当前的位置减去栈顶的存的位置下标，然后就得到当前合法序列的长度，然后更新一下最长长度。
// 栈是空的，说明之前没有与之匹配的左括号，那么就将当前位置的下标入栈。

// 为了能够判断出类似'()))' 开始就有合法的子串，遍历前首先要将-1放入栈顶

// 图解


longestValidParentheses = (s) => {
    let maxLen = 0;
    let stack = [-1];
    for (let i = 0, len = s.length; i < len; i++) {
        if (s[i] == '(') {
            stack.push(i);
        } else {
            stack.pop();
            let sLen = stack.length;
            if (sLen == 0) {
                stack.push(i);
            } else {
                maxLen = Math.max(maxLen, i - stack[sLen - 1]);
            }
        }
    }
    return maxLen;
}

// 神奇方法（计数法
// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 有效 == 对称 找对称的字符，求最长字符串
// 保持时间复杂度是 O（n），将空间复杂度优化到了 O（1）。

// 从左到右扫描，用两个变量 left 和 right 保存的当前的左括号和右括号的个数，都初始化为 0 。

// 如果左括号个数等于右括号个数了，那么就更新合法序列的最长长度。
// 如果左括号个数大于右括号个数了，那么就接着向右边扫描。
// 如果左括号数目小于右括号个数了，那么后边无论是什么，此时都不可能是合法序列了，此时 left 和 right 归 0，然后接着扫描。
// 从左到右扫描完毕后，同样的方法从右到左再来一次，

// 因为类似这样的情况 ( ( ( ) ) ，如果从左到右扫描到最后，left = 3，right = 2，期间不会出现 left == right。
// 但是如果从右向左扫描，扫描到倒数第二个位置的时候，就会出现 left = 2，right = 2 ，就会得到一种合法序列。

longestValidParentheses = (s) => {
    let maxLen = 0,
        left = 0, 
        right = 0,
        len = s.length;
    // 从左往右遍历
    for (let i = 0; i < len; i++) {
        if (s[i] == '(') {
            left++;
        } else {
            right++;
        }
        if (right == left) {
            maxLen = Math.max(maxLen, left * 2);
        } else if (right > left) {
            left = 0;
            right = 0;
        }
    }
    left = 0;
    right = 0;
    // 从右往左遍历
    for (let i = len - 1; i >= 0; i--) {
        if (s[i] == ')') {
            right++;
        } else {
            left++;
        }
        if (right == left) {
            maxLen = Math.max(maxLen, left * 2);
        } else if (right < left) {
            left = 0;
            right = 0;
        }
    }
    
    return maxLen;
}


// 相关题目
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

// 分析：栈先入后出特点恰好与本题括号排序特点一致
// 即若遇到左括号入栈，遇到右括号时将对应栈顶左括号出栈，则遍历完所有括号后 stack 仍然为空

var isValid = function(s) {
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let len = tack.length;
        switch (s[i]) {
            case '[':
               stack.push('[');
               break;
            case ']':
               if (len == 0 || stack[len-1] != '[') {
                   return false;
               }
               stack.pop();
               break;
            case '{':
               stack.push('{');
               break;
            case '}':
               if (len == 0 || stack[len-1] != '{') {
                   return false;
               }
               stack.pop();
               break;
            case '(':
               stack.push('(');
               break;
            default:
               if (len == 0 || stack[len-1] != '(') {
                   return false;
               }
               stack.pop();
        }
    }
    return stack.length == 0;
};
// 题目：
// 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

// 暴力解题
// 时间复杂度：O(n^2)
// 空间复杂度：O(n)
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

// 神奇方法
// 时间复杂度：O(n)
// 空间复杂度：O(1)
longestValidParentheses = (s) => {
    let maxLen = 0,
        left = 0, 
        right = 0,
        len = s.length;
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
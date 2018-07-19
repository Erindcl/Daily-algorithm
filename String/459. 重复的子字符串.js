/*
	459. 重复的子字符串
		给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。
*/

var repeatedSubstringPattern = function(s) {
    let count = 0, len = s.length;
    if (len == 1) {
        return false;
    }
    for (let i = 1; i < len / 2 + 1; i++) {
        if (len % i == 0) {
            let tempS = s.slice(0,i);
            let compS = "";
            for (let j = 0; j < len / i; j++) {
                compS += tempS;
            }
            if (compS == s) {
                return true;
            }
        }
    }
    return false;
};


// 更好的实现
 var repeatedSubstringPattern = function(s) {
       var newStr = s + s;
      newStr = newStr.substr(0,newStr.length - 1).substr(1);
      if (newStr.indexOf(s) != -1) {
        return true;
      }
      return false;
   };

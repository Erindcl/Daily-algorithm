/*
	557. 反转字符串中的单词 III
		给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
*/

var reverseWords = function(s) {
    let index = 0, newS = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == " ") {
            newS += s.slice(index,i).split("").reverse("").join("");
            newS += " ";
            index = i + 1;
        }
    }
    newS += s.slice(index,s.length).split("").reverse("").join("");
    return newS;
};


// 更好的实现
var reverseWords = function(s) {
  var str = ''
  var ch = ''
  for(var i = 0 ; i < s.length ; i++){
    if(s[i] != ' '){
      ch = s[i] + ch
    }
    if(s[i] == ' ' || i == s.length-1){
      str = str + ' ' + ch
      ch = ''
    }
  }
  return str.slice(1)
};

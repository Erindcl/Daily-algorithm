/*
	551. 学生出勤纪录 I
		给定一个字符串来代表一个学生的出勤纪录，这个纪录仅包含以下三个字符：
        'A' : Absent，缺勤
        'L' : Late，迟到
        'P' : Present，到场
        如果一个学生的出勤纪录中不超过一个'A'(缺勤)并且不超过两个连续的'L'(迟到),那么这个学生会被奖赏。
        你需要根据这个学生的出勤纪录判断他是否会被奖赏。
*/

var checkRecord = function(s) {
    var countA = 0, countL = 0, len = s.length;
    if (len <= 1) {
        return true;
    }
    if (s[0] == "A") {
        countA = 1;
    }
    for (let i = 1; i < len; i++) {
        if (s[i] == "A") {
            countA++;
        }
        if (i+1 < len) {
            if (s.slice(i-1,i+2) == "LLL") {
                countL++;
            }
        }
        
    }
    return countA <= 1 && countL == 0;
};


// 更好的实现
var checkRecord = function(s) {
    var countA = 0;
      for (var i = 0; i < s.length; i++) {
        if ( s[i] == "A" ) {
          countA++;
        }
        if (s[i] == "L" && s[i+1] == "L" && s[i+2] == "L") {
          return false;
        }
      }
      if (countA > 1 ) {
        return false;
      }
      return true;
};

/*
	118. 杨辉三角
		给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。	
*/

// 分析每一行数组的结构：在第 n 行，*arr[0] 和 arr[n -1] 均为 1， arr[i] = 上一行arr[i -1] + 上一行的arr[i]
var generate = function(numRows) {
    if (numRows == 0) {
        return [];
    }
    var resultArr = [];
    for (var i = 0; i < numRows; i++) {
        var currArr = [];
        currArr[0] = 1;
        currArr[i] = 1;
        for (var j = 1; j < i; j++) {
            currArr[j] = resultArr[i-1][j-1] + resultArr[i-1][j];
        }
        resultArr.push(currArr);
    }
    return resultArr;
};

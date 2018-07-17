/*
	119. 杨辉三角 II
		给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。	
*/

var getRow = function(rowIndex) {
    if (rowIndex == 0) {
        return [1];
    }
    var resultArr = [];
    for (var i = 0; i <= rowIndex; i++) {
        var currArr = [];
        currArr[0] = 1;
        currArr[i] = 1;
        for (var j = 1; j < i; j++) {
            currArr[j] = resultArr[i-1][j-1] + resultArr[i-1][j];
        }
        resultArr.push(currArr);
    }
    return resultArr[rowIndex];
};

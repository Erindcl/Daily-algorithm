/*
	830. 较大分组的位置
        在一个由小写字母构成的字符串 S 中，包含由一些连续的相同字符所构成的分组。
        例如，在字符串 S = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。
        我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。
        最终结果按照字典顺序输出。
 */

var largeGroupPositions = function(S) {
    let map = new Map(), currIndex = 0, currS = S[0];
    let result = [], sArr = S.split('');
    for (let i = 1; i < S.length; i++) {
        if (S[i] == S[i-1]) {
            currS += S[i];
        } else {
            if (currS.length >= 3) {
                let currArr = [currIndex, parseInt(currIndex) + parseInt(currS.length) - 1];
                result.push(currArr);
            }
            currIndex = i;
            currS = S[i];
        }
    }
    if (currS.length >= 3) {
        let currArr = [currIndex, parseInt(currIndex) + parseInt(currS.length) - 1];
        result.push(currArr);
    }
    return result;
};

// 其他实现：
var largeGroupPositions = function(S) {
    let outPut=[]
    let reg=/([a-z])\1\1+/g
    let out=reg.exec(S)
    while(out)
        {
            outPut.push([out.index,out.index+out[0].length-1])
            out=reg.exec(S)
        }
    return outPut
}; 
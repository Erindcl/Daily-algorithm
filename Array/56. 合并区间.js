/*
	56. 合并区间
		给出一个区间的集合，请合并所有重叠的区间。
    分析：将Interval的start与end元素分别置于两个数组中并排序，遍历通过比较排序后两数组的元素大小得出合并后的区间
*/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    let n = intervals.length;
    let startArr = [], endArr = [], resultArr = []; 
    for (let i = 0; i < n; i++) {
        startArr.push(intervals[i].start);
        endArr.push(intervals[i].end);
    }  // 得出startArr和endArr数组
    startArr.sort((a,b) => {return a - b;}); // 进行数组排序
    endArr.sort((a,b) => {return a - b;}); // 进行数组排序
    for (let i = 0, j = 0; i < n; i++) {
        if (i == n - 1 || startArr[i + 1] > endArr[i]) {
            resultArr.push(new Interval(startArr[j],endArr[i]));
            j = i + 1;  // j记录的为合并后区间的上界
        }
    }
    return resultArr;
};


// 更好的实现
var merge = function(intervals) {
    intervals.sort((a,b) => a.start - b.start);
    let resArr = [];
    intervals.forEach(cur =>{
        if(resArr.length === 0) resArr.push(cur);
        else {
            let last = resArr.pop();
            if(last.end >= cur.start){
                last.end = Math.max(last.end,cur.end);
                resArr.push(last);
            }else{
                resArr.push(last,cur);
            }
        }
    })
    return resArr;
};

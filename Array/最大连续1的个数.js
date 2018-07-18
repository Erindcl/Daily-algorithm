/*
	485. 最大连续1的个数
        给定一个二进制数组， 计算其中最大连续1的个数。
        注意：
            输入的数组只包含 0 和1。
            输入数组的长度是正整数，且不超过 10,000。
    分析：遍历数组，将数组中多段连续1的个数存放在一个数组中，最后数组中元素的最大值即为最大连续1的个数
 */

var findMaxConsecutiveOnes = function(nums) {
    let conArr = [], count = 0;
    nums.forEach((val,index,arr) => {
        if (val == 1) {
            count++;
        } else {
            conArr.push(count);
            count = 0;
        }
    });
    conArr.push(count);
    return Math.max(...conArr);
};

// 其他实现：
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let cur = 0;
    nums.map(function (num) {
        if(num == 1){
            cur++;
            max = cur > max ? cur : max;
        }
        else{
            cur = 0;
        }
    });
    return max;
};
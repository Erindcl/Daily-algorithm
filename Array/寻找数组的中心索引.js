/*
	724. 寻找数组的中心索引
        给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。
        我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。
        如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
    分析：遍历数组，分别计算i左侧元素和与右侧元素和的大小，当两侧元素和相等，则i即为中心索引。
 */

var pivotIndex = function(nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let sumL = 0, sumR = 0;
        for(let j = 0; j < i; j++) {
            sumL += nums[j];
        }
        for(let k = i + 1; k < len; k++) {
            sumR += nums[k];
        }
        if (sumR == sumL) {
            return i;
        }
    }
    return -1;
};

// 其他实现：
var pivotIndex = function(nums) {
    let len = nums.length, currS = 0;
    let sum = nums.reduce((a,b) => a+b, 0); // 利用reduce累加器计算数组的和
    for (let i = 0; i < len; i++) {
        if (sum == currS * 2 + nums[i]) {
            return i;
        }
        currS += nums[i];
    }
    return -1;
};
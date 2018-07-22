/*
	628. 三个数的最大乘积
        给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
    分析：因为有负数的出现 有两种结果构成最大乘数，一是三个最大正数相乘，二是一个最大正数和两个最小负数相乘。故将数组排序后 将上述两种情况都进行计算 比较两者结果大小就可求出最大值
 */

var maximumProduct = function(nums) {
    let len = nums.length;
    nums.sort((a, b) => {return b - a;});
    let max1 = nums[0] * nums[1] * nums[2];
    let max2 = nums[0] * nums[len-1] * nums[len-2];
    return max1 >= max2 ? max1 : max2;
};

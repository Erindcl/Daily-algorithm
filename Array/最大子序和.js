/*
	53. 最大子序和
		给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
	
	思路：设置一个变量存放元素序列相加的最大的和。将数组逐个进行相加，当加到某个元素时和变为了负数则当前和直接置零，每次循环中都将当前和与最大和进行比较，如果当前和较大，则将当前和设置为新的最大和。
 */

var maxSubArray = function(nums) {
    if (nums.length == 0 || nums == null) {  // 非空判断
        return 0;
    } 
    var maxSum = 0, currSum = 0;
    nums.forEach(function (value,index,nums) {
        currSum += value;
        if (currSum < 0) {  // 和小于0就直接置0
            currSum = 0;
        }
        maxSum = (maxSum < currSum) ? currSum : maxSum;
    });
    if (maxSum == 0) {
        return Math.max(...nums);
    }
    return maxSum;
};


// 更好的实现
var maxSubArray = function (nums) {
    let count = nums[0], maxCount = nums[0]
    for (let i = 1; i < nums.length; i++) {
        count = Math.max(count + nums[i], nums[i])
        maxCount = Math.max(maxCount, count)    
    }
    return maxCount
};

/*
	643. 子数组最大平均数 I
        给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
 */

var findMaxAverage = function(nums, k) {
    var sum = 0, max = 0;
    for(var i = 0; i < k; i++){
        sum += nums[i];
    }
    max = sum;
    for(var i = k, len = nums.length; i < len; i++){
        sum += nums[i] - nums[i-k]; // 使用第i个去取代第i-k个元素 只用将两者的差值加入到和中
        max = Math.max(max,sum);
    }
    return max/k;
};

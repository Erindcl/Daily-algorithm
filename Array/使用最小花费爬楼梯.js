/*
	746. 使用最小花费爬楼梯
        数组的每个索引做为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。
        每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。
        您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
    分析：动态规划：找到关键的状态方程dp[i] = min(dp[i-1], dp[i-2])+cost[i],使得dp数组每一个位置都存放当前的最小答案
 */

var minCostClimbingStairs = function(cost) {
    let len = cost.length;
    if (len <= 2) {
        return 0;
    }
    let dp = [cost[0],cost[1]]; 
    for (let i = 2; i < len; i++) {
        let curr = Math.min(dp[i-1],dp[i-2]) + cost[i];
        dp.push(curr);
    }
    return Math.min(dp[len - 1],dp[len - 2]);
};

// 其他实现：
var minCostClimbingStairs = function(cost) {
    for(let i = 2; i < cost.length; i++) {
        cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2]);
    }
    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}
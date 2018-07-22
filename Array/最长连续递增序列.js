/*
	674. 最长连续递增序列
        给定一个未经排序的整数数组，找到最长且连续的的递增序列。
 */

var findLengthOfLCIS = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    let maxL = 1, count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] <= nums[i-1]) {
            maxL = maxL > count ? maxL : count;
            count = 1;
        } else {
            count++;
        }
    }
    maxL = maxL > count ? maxL : count;
    return maxL;
};
/*
	414. 第三大的数
        给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
    分析：将数组按降序排序去重后，判断数组长度如果小于三则返回数组的第一个元素即最大元素，若数组长度大于等于三，则返回数组的第三个元素，即为数组中第三大的数
 */

var thirdMax = function(nums) {
    nums.sort(function (a,b) {
      return b - a;
    });
    nums = [...new Set(nums)]; // Set类型不能访问使用[]或.访问其中的某一元素 所以此时应该使用 拓展字符串将其转换回数组 相较更方便操作一些
    let len = nums.length;
    return len < 3 ? nums[0] : nums[2];
};
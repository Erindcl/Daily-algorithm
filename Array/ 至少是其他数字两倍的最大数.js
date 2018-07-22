/*
	747. 至少是其他数字两倍的最大数
        在一个给定的数组nums中，总是存在一个最大元素 。
        查找数组中的最大元素是否至少是数组中每个其他数字的两倍。
        如果是，则返回最大元素的索引，否则返回-1。
 */

var dominantIndex = function(nums) {
    let max = Math.max(...nums);
    let maxIndex = nums.indexOf(max);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != max && max / 2 < nums[i]) {
            return -1;
        }
    }
    return maxIndex;
};
 
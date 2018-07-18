/*
	268. 缺失数字
        给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
    分析：将数组进行升序排序，没有缺失的数组元素应该与其下标相等，故排序后遍历数组，将数组下标与元素进行比较，若不相等，则数组下标即为该数组缺失的元素。若数组所有的元素都与其下标相等，则数组缺失的为数组最后一个元素的下一个数字，即nums.length或nums[nums.length - 1] + 1
 */

var missingNumber = function(nums) {
    nums.sort((a,b)=>{return a - b;});
    for (let i = 0, len = nums.length; i < len; i++) {
        if (i != nums[i]) {
            return i;
        }
    }
    return nums[nums.length - 1] + 1;
};

// 其他实现：
var missingNumber = function(nums) {
    let missing = nums.length;
    for(let i = 0; i < nums.length; i++) {
        missing ^= i ^ nums[i]
    }
    return missing;
};
/*
	35. 搜索插入位置
		给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
		你可以假设数组中无重复元素。

	思路：此处要分三种情况：插入位置在首部、中部、尾部。当插入位置在首部时，返回0；当插入位置在尾部时，返回数组长度。当插入位置在中部时，利用二分法查找将元素与插入元素进行比较确认插入的位置。
 */

var searchInsert = function(nums, target) {
    if (nums.indexOf(target) != -1) {  // 数组中存在目标元素
        return nums.indexOf(target);
    } else {  // 数组中不存在目标元素  故需要找到插入的位置
        var start = 0, end = nums.length - 1;
        if (target < nums[start]) {  // 插入位置在数组首部
            return 0;
        } else if (target > nums[end]) {  // 插入位置在数组尾部
            return nums.length;
        } else {  // 插入位置在数组内部
            while (start < end - 1) {  // 此处可采用普通遍历也可采用二分法遍历查找  但当数组元素相当多的时候 二分法查找效率更高  star与end到最后始终会想差一
                var center = parseInt((start + end) / 2);
                if (nums[center] > target) {
                    end = center;
                } else if (nums[center] < target) {
                    start = center;
                } else {
                    return center;
                }
            }
            if (nums[end] >= target) {
                return end;
            } else {
                return end - 1;
            }
        }
        
    }
};


// 更好的实现
var searchInsert = function(nums, target) {
    let len = nums.length
    if (len === 0) {
        return 0
    }
    for (let i = 0; i < len; i++) {
        let num = nums[i]
        if (target <= num ) {
            return i
        }
    }
    return len
};

/*
	27. 移除元素
		给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。
		不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
		元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 */

var removeElement = function(nums, val) {
    var index = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[index] = nums[i];
            index++;
        }
    }
    nums = nums.slice(0,index);
    return index;
};


// 更好的实现
var removeElement = function(nums, val) {
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] == val) {
            nums.splice(i, 1)
            i--   // 由于对原数组进行了修改，故需要把下标 往前移一位
        }
    }
};
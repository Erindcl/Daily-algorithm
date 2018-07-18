/*
	283. 移动零
        给定一个数组nums，编写一个函数将所有0移动到数组的末尾，同时保持非零元素的相对顺序。
        说明:
            必须在原数组上操作，不能拷贝额外的数组。
            尽量减少操作次数。
    分析：将所有非零元素按照其顺序在原数组中从左依次排序，排完非零元素后  剩余数组长度的元素都置零
 */

var moveZeroes = function(nums) {
    let count = 0;
    nums.forEach(function (val,index,arr) {
        if (val != 0) {
            arr[count] = val;
            count++;
        }
    });
    while (count < nums.length) {
        nums[count] = 0;
        count++;
    }
};

// 其他实现：
var moveZeroes = function(nums) {
    for(var i = nums.length - 1;i > -1;i--){
        if(nums[i] == 0){
            nums.splice(i,1)
            nums.push(0)
        }
    }
};
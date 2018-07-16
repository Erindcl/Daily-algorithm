/*
	1. 两数之和
		给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。
		你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

	思路：遍历数组，将数组的某个元素与在该元素后面的其他元素进行求和，将和与目标值进行比较，若相等则返回两元素的索引。
 */

var twoSum = function(nums, target) {
   for(var i=0; i < nums.length; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j]
            }
        }
        
    }
};


// 其他实现
var twoSum = function(nums, target) {
    var map = {};
    for(var i=0; i<nums.length;i++) {
        if(map[target-nums[i]] != undefined) {
            return [map[target-nums[i]],i];
        } else {
            map[nums[i]] = i;
        }
    }
};
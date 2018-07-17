/*
	189. 旋转数组
        给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。数。
*/

var rotate = function(nums, k) {
  var len = nums.length;
  var temp1 = nums.slice(0,len-k);
  var temp2 = nums.slice(len-k,len);
  nums = temp2.concat(temp1);
};
/*
	219. 存在重复元素 II
        给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的绝对值最大为 k。
*/

var containsNearbyDuplicate = function(nums, k) {
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j <= k + i && j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                return true;
            }
        }
    }
    return false;
};

// 更好地实现
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for(let i = 0, len = nums.length; i < len; i++) {
        if(map.has(nums[i]) && Math.abs(map.get(nums[i]) - i) <= k) {
            return true;
        }
        map.set(nums[i],i);
    }
    return false;
};
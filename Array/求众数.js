/*
	169. 求众数		
        给定一个大小为 n 的数组，找到其中的众数。众数是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。
        你可以假设数组是非空的，并且给定的数组总是存在众数。
*/

// 将数组中出现的元素以及元素出现的次数 存进一个map里面 通过比较次数的大小 来找出对应的元素
var majorityElement = function(nums) {
    var map = new Map();
    nums.forEach(function (val,index,arr){
        if (map.has(val)) {
            var count = map.get(val);
            count++;
            map.set(val,count);
        } else {
            map.set(val,1);
        }
    });
    var el = 0, num = 0;
    for (let [key, value] of map) {
        if (num < value) {
            el = key;
            num = value;
        }
    }
    return el;
};
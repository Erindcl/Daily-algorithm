/*
	448. 找到所有数组中消失的数字
        给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的整型数组，数组中的元素一些出现了两次，另一些只出现一次。
        找到所有在 [1, n] 范围之间没有出现在数组中的数字。
        您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
 */

var findDisappearedNumbers = function(nums) {
    let len = nums.length, disNums = [], count = 1, i = 0;
    nums = [...new Set(nums)]; // 数组去重
    nums.sort((a,b) => {return a - b;});  // 数组升序排序
    while (i < nums.length) {  // 当数组中的元素与count元素相等时才接着往下遍历数组，否则就将count存进返回的结果数组中
        if (nums[i] != count) {
            disNums.push(count);
        } else {
            i++;
        }
        count++;
    }
    while(disNums.length < len - nums.length) {  // 当缺失的是末尾的数字时，通过几个数组长度的比较，判断是否需往结果数组中添加元素
        disNums.push(count);
        count++;
    }
    return disNums;
};

// 其他实现：
var findDisappearedNumbers = function(nums) {
    var res = [],
    length = nums.length;
    
    for(var i = 0; i < length;i++){
        var m = Math.abs(nums[i]) - 1; //这里须取绝对值，因为在之前的操作中这里可能已经被置为负值，这里判断需要按照原值进行。
        nums[m] = nums[m] > 0 ? -nums[m] : nums[m];
    }
    for(var j = 0;j < length;j++){
        if(nums[j] >= 0) res.push(j + 1);
    }
    return res
};
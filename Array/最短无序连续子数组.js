/*
	581. 最短无序连续子数组	
        给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。
        你找到的子数组应是最短的，请输出它的长度。
    分析：将排序后的数组与排序前的数组进行比较，分别前后遍历进行比较，在遍历过程中两数组出现差异的地方记录下来，两头出现差异的索引相减就可计算处中间调换了顺序的元素有多少个
 */

var findUnsortedSubarray = function(nums) {
    let leftIndex = 0, len = nums.length, rightIndex = len - 1;
    let beforArr = [...nums]; // 如果直接将数组赋值给变量即beforArr = nums 则实现的是深拷贝 即两个变量所指向的是内存中同一个数组空间 不管是改变nums的值还是改变beforArr的值都会导致两者变化时同步的
    nums.sort((a,b) => {return a -b;});
    for (let i = 0; i < len; i++) {
        leftIndex = i;
        if (beforArr[i] != nums[i]) {
            break;
        }
    }
  
    for (let i = len - 1; i >= 0; i--) {
        rightIndex = i;
        if (beforArr[i] != nums[i]) {
            break;
        }
    }
    if (rightIndex <= leftIndex) {
      return 0;
    }
    return rightIndex - leftIndex + 1;
};

// 其他实现：
var findUnsortedSubarray = function(nums) {
    let length = nums.length,
        beg = -1,
        end = -2,
        min = nums[length - 1],
        max = nums[0]
    
    for (let i = 0; i < length; i++) {
        max = Math.max(max, nums[i])
        min = Math.min(min, nums[length - 1 - i])
        
        if(nums[i] < max) end = i
        if(nums[length - 1 - i] > min) beg = length - 1 - i
    }
    
    return end - beg + 1
};
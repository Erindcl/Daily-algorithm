/*
	532. 数组中的K-diff数对
		给定一个整数数组和一个整数 k, 你需要在数组里找到不同的 k-diff 数对。这里将 k-diff 数对定义为一个整数对 (i, j), 其中 i 和 j 都是数组中的数字，且两数之差的绝对值是 k.
        注意:
            数对 (i, j) 和数对 (j, i) 被算作同一数对。
            数组的长度不超过10,000。
            所有输入的整数的范围在 [-1e7, 1e7]。
	分析：将数组升序排序后，遍历数组，在遍历的过程中需排除k-diff对（i,j）中i重复以及k-diff对（i,j）中j重复的情况，之后再判断（i,j）中 i 与 j 的差值是否等于 k。
 */

var findPairs = function(nums, k) {
    let count = 0, len = nums.length;
    nums.sort((a,b) => {return a - b;});  // 升序排序
    for(let i = 0; i < len; i++){
        let curr = nums[i] + k;
        if (i -1 >= 0 && nums[i] == nums[i - 1]) {  // 排除k-diff对（i,j）中i重复的情况
            continue;
        }
        for (let j = i + 1; j < len; j++) {
            if (nums[j + 1] == nums[j] && j + 1 < len) {  // 排除k-diff对（i,j）中j重复的情况
                continue;
            }
            if (nums[j] == curr) {
                count++;
            }
        }
    }
    return count;
};

// 更好的实现
var findPairs = function(nums, k) {
  nums.sort((x, y) => x - y)
  let foo = new Set()
  let res = 0
  for (let i = 0; i < nums.length; i++) {
    let j = i + 1

    while (nums[j] - nums[i] <= k && j < nums.length) {
      if (nums[j] - nums[i] === k && !foo.has(nums[i])) {
        res++
        foo.add(nums[i])
      }
      j++
    }
  }

  return res
};
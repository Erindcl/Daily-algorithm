// 11. 盛最多水的容器

// 给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。
// 在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 说明：你不能倾斜容器，且 n 的值至少为 2。


// 解法一：暴力解决
// 简单地考虑每对可能出现的线段组合并找出这些情况之下的最大面积



// 解法二： 双指针法
// 矩阵的面积与两个因素有关：

// 矩阵的长度：两条垂直线的距离
// 矩阵的宽度：两条垂直线其中较短一条的长度
// 因此，要矩阵面积最大化，两条垂直线的距离越远越好，两条垂直线的最短长度也要越长越好。

// 我们设置两个指针 left 和 right，分别指向数组的最左端和最右端。
// 此时，两条垂直线的距离是最远的，若要下一个矩阵面积比当前面积来得大，必须要把 height[left] 和 height[right] 中较短的垂直线往中间移动，看看是否可以找到更长的垂直线。

var maxArea = function(height) {
    if (!Array.isArray(height)) {
        return 0;
    }
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        maxArea = Math.max(maxArea, Math.min(height[left], height[right]) * (right - left));
        if (height[left] > height[right]) {
            right --;
        } else {
            left ++;
        }
    }
    return maxArea;
};
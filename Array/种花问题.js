/*
	605. 种花问题
        给假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
        给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。
    分析：根据计算相邻两个1之间有几个数确定空位能种值花卉的最大数，再将所有空位种植花卉最大数相加即可得到整个花园还可种植花卉的最大数，即可确定最大能放多少。特别注意首尾的空位，要想在首尾能种植花卉就假设，数组索引-2和length+1的位置值为1。
 */

var canPlaceFlowers = function(flowerbed, n) {
    let sum = 0; // 花园中能存放花的最大数量
    let index = - 2; // 当前1所在的数组中的索引 初始值设为-2的原因是 当数组第一个元素为0能置1时其前后位都得不为1，故-1位置不能设为1的起始位 要设置-2为1的起始位才行
    for(let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 1) {
            let curr1 = parseInt((i - index) / 2) - 1; // parseInt() 丢弃小数部分取整数部分
            sum += curr1 < 0 ? 0 : curr1;
            index = i;
        }
    }
    let curr2 = parseInt((flowerbed.length + 1 - index) / 2) - 1;  // 当数组末尾还有一大部分的连续0出现时 需要将末尾能放置1的位置数一同加上 注意此处flowerbed.length + 1的原因与index初始值设为-2原因类似
    sum += curr2 < 0 ? 0 : curr2;
    return sum >= n ? true : false;
};

// 其他实现：
var canPlaceFlowers = function(flowerbed, n) {
    let temp = 1;
    let ans = 0;

    for (var i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0) {
            temp++;
        } else if (flowerbed[i] === 1 && temp > 0) {
            ans += Math.floor((temp - 1) / 2);
            temp = 0;
        }
    }

    ans += Math.floor(temp / 2);

    return ans >= n;
};
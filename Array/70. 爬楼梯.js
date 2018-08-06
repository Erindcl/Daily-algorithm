/*
	70. 爬楼梯		
        假设你正在爬楼梯。需要 n 步你才能到达楼顶。
        每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
    分析：爬一个台阶有1种方法，两个台阶有2种方法，爬三个台阶有1+2=3中方法，爬四个台阶有2+3=5中方法，依次类推，爬i个台阶有 爬i-1个台阶的方法数 + 爬i-2个台阶的方法数 种方法。
*/

var climbStairs = function(n) {
        if (n == 0)
            return 1;
        let array = [];
        array[0] = 1;
        array[1] = 1;
        for (let i = 2; i <= n; i++) {
            array[i] = array[i - 1] + array[i - 2];
        }
        return array[n];
};
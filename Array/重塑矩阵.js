/*
	566. 重塑矩阵		
        在MATLAB中，有一个非常有用的函数 reshape，它可以将一个矩阵重塑为另一个大小不同的新矩阵，但保留其原始数据。
        给出一个由二维数组表示的矩阵，以及两个正整数r和c，分别表示想要的重构的矩阵的行数和列数。
        重构后的矩阵需要将原始矩阵的所有元素以相同的行遍历顺序填充。
        如果具有给定参数的reshape操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。
    分析：首先判断原矩阵与重塑后的矩阵元素个数是否相同，如果不相同则返回原矩阵。如果相同则进行一下操作，将原矩阵的所有元素全部依次存进一个数组，遍历数组将数组元素按照重塑矩阵的行列要求放入一个新的二维数组中，最后这个二维数组即为重塑后的矩阵。
 */

var matrixReshape = function(nums, r, c) {
    let pR = nums.length, pC = nums[0].length;
    if (pR * pC != r * c) {
        return nums;
    }
    let newArr = [], resultArr = [], count = 0;
    for (var value of nums) {
      newArr.push(...value);
    }
    for (let i = 0; i < r; i++) {
        let currArr = [];
        for (let j = 0; j < c; j++) {
            currArr.push(newArr[count]);
            count ++;
        }
        resultArr.push(currArr);
    }
    return resultArr;
};

// 其他实现：
var matrixReshape = function(nums, r, c) {
  if (nums.length * nums[0].length !== r * c) return nums
  let res = []
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    arr.push(...nums[i])
  }
  for (let j = 0; j < r; j++) {
    res.push(arr.splice(0, c))
  }
  return res
};

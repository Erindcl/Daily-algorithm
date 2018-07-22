/*
	766. 托普利茨矩阵
        如果一个矩阵的每一方向由左上到右下的对角线上具有相同元素，那么这个矩阵是托普利茨矩阵。
        给定一个 M x N 的矩阵，当且仅当它是托普利茨矩阵时返回 True。
 */

var isToeplitzMatrix = function(matrix) {
    let lenN = matrix.length;
    let lenM = matrix[0].length;
    for (let i = 0; i < lenN - 1; i++) {
        for (let j = 0; j < lenM - 1; j++) {
            if (matrix[i][j] != matrix[i+1][j+1]) {
                return false;
            }
        }
    }
    return true;
};
 
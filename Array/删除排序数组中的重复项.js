/*
    26. 删除排序数组中的重复项
        给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
        不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
        
    思路：从数组的第二个元素起，将数组的每个元素与他的前一个元素进行比较，若俩元素不相等则将当前比较元素从零开始存放在数组中，若两数相等则继续下一次循环。
*/

var removeDuplicates = function (A) {
    if (A == null || A.length == 0) {
         return 0;  
    } 
    var index = 1;  
    for (var i = 1; i < A.length; i++) {  
        if (A[i] != A[i-1])  
        {  
            A[index] = A[i];  
            index++;  
        }  
    }  
    return index; 
};
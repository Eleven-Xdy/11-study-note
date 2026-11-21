nums = [2,7,11,15], target = 9
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++){
        for(let j = i + 1;j < nums.length; j++){
            if(nums[i] + nums[j] == target){
                return [i,j];
          }
        }
    }
};
//时间复杂度:O(n^2)  两层for循环
//空间复杂度:O(1)  只用了常量级的额外空间 
//算法的优劣:时间复杂度高 空间复杂度低
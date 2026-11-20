let nums = [2,7,11,15], target = 9;

//用空间换时间

var twoSum = function(nums, target) {
   const obj = {};         //创建一个空对象 是一个哈希表 用来记录每个已经遍历过的数字及其下标
   //`obj`的键是数组里的数值
   // 值是这个数值的下标，第一次循环结束时，obj 就变成了 { 2: 0 }，意思是 数字 2 出现在下标 0 处

    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];       //计算差值
        if(obj[diff] !== undefined){       //判断对象里是否有diff属性的值 有的话输出 没有就是undefined
            return [obj[diff],i]
        }
        obj[nums[i]] = i;       //将当前元素的索引赋值给对象的属性
    }
};

//这道题的执行过程
// i=0，nums[0]=2，diff=7，`obj[7]` 是 undefined，所以 `obj[2] = 0`
// i=1，nums[1]=7，diff=2，`obj[2]` 是 0，命中，返回 [0, 1]

//可以这样理解：每个人先把 “我是几号、我缺多少” 登记进本子
// 轮到谁就翻本子看有没有人正好缺自己
//第一个元素 2 登记了 “我缺 7”，走到 7 时一查，发现有人缺 7，配对成功
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for(i=0;i<nums.length;i++){
//         for(j=0;j<nums.length;j++){
//             if(i != j){
//                 sum=nums[i]+nums[j];
//                 if(sum==target){
//                     return [i,j];
//                 }
//             } else {}
//         }
//     }
// };

var twoSum = function(nums, target) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i], i);
    }

    for (let i = 0; i < nums.length; i++) {
        // if ((target > 0 && nums[i] > target) || (target < 0 && nums[i] < target)) {
        //     continue;
        // }
        let t = target - nums[i];
        if (m.has(t) && m.get(t) !== i) return [i, m.get(t)];
    }
};

// test :
console.log(twoSum([2, 8, 12, 15], 20));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.log(twoSum([-1, -2, -3, -4, -5], -8));
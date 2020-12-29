var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++) {
            if (i != j) {
                sum = nums[i] + nums[j];
                console.log(i, j, sum);
                if (sum == target) {
                    console.log("done");
                    return [i, j];
                }
            } else {}
        }
    }
};

list = [2, 8, 12, 15];
twoSum(list, 20);
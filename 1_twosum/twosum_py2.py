class Solution:
    def twoSum(self, nums, target):
        for i in range (len(nums)):
            for j in range (len(nums)):
                if (i != j):
                    sum=nums[i]+nums[j]
                    print i,j,sum
                    if(sum==target):
                        print "done"
                        return [i,j]
                    else: continue

List=[2,8,12,15]
ob1=Solution()
print(ob1.twoSum(List, 20))

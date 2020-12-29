from typing import List
class Solution:
    def reverse(self, x: int) -> int:
        neg=False
        if(x>=0):
            s=str(x)
        else:
            neg=True
            s=str(x*-1)
        list1=list(s)
        new_str=""
        for i in list1[::-1]:
            # print(i)
            new_str=new_str+i
        if(x<0):
            return(-1*(int(new_str)))
        else:
            return(int(new_str))

ob1=Solution()
print(ob1.reverse(123))
print(ob1.reverse(210))
print(ob1.reverse(-567))
